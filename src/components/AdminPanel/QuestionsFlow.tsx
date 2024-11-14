import {
  addEdge,
  Background,
  Controls,
  MarkerType,
  ReactFlow,
  useEdgesState,
  useNodesState,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import React, {useCallback, useEffect, useState, useLayoutEffect} from 'react';
import {doc, getDoc, updateDoc} from 'firebase/firestore';
import {QuestionItem} from '../../app/types';
import {db} from '../../utils/firebase';
import NodeContent from './NodeContent';

interface QuestionsFlowProps {
  questions: QuestionItem[];
  language: 'en' | 'fi' | string;
  handleEdit: (question: QuestionItem) => void;
  moveQuestion: (index: number, direction: 'up' | 'down') => void;
}

const QuestionsFlow: React.FC<QuestionsFlowProps> = ({
  questions,
  language,
  handleEdit,
  moveQuestion,
}) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1000,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  const toggleLock = async (index: number) => {
    const question = questions[index];
    const newLockedStatus = !question.locked;

    try {
      const questionRef = doc(db, 'questions', 'questions');
      const questionSnapshot = await getDoc(questionRef);

      if (questionSnapshot.exists()) {
        const oldQuestions = questionSnapshot.data().questions;
        oldQuestions[index].locked = newLockedStatus;
        await updateDoc(questionRef, {
          questions: oldQuestions,
        });
      }
    } catch (error) {
      console.error('Error updating lock status:', error);
    }
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const createNode = (question: QuestionItem, index: number): Node => ({
    id: question.id,
    data: {
      label: (
        <NodeContent
          question={question}
          index={index}
          language={language}
          handleEdit={handleEdit}
          moveQuestion={moveQuestion}
          toggleLock={toggleLock}
        />
      ),
    },

    position: {x: 0, y: index * 250},
  });

  const initialNodes: Node[] = questions.map(createNode);

  const initialEdges: Edge[] = questions
    .map((question, index) => ({
      id: `e${index}`,
      source: question.id,
      target: questions[index + 1]?.id || '',
      markerEnd: {type: MarkerType.ArrowClosed},
      type: 'smoothstep',
    }))
    .filter((edge) => edge.target);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  interface OnConnectParams {
    source: string;
    sourceHandle: string | null;
    target: string;
    targetHandle: string | null;
  }

  const onConnect = useCallback(
    (params: OnConnectParams) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  useEffect(() => {
    const newNodes = questions.map(createNode);

    const newEdges = questions
      .map((question, index) => ({
        id: `e${index}`,
        source: question.id,
        target: questions[index + 1]?.id || '',
        markerEnd: {type: MarkerType.ArrowClosed},
        type: 'smoothstep',
      }))
      .filter((edge) => edge.target);

    setNodes(newNodes);
    setEdges(newEdges);
  }, [questions, language, windowSize]);

  return (
    <div
      style={{width: '98%', height: '800px'}}
      className='bg-black/20 rounded-xl m-2 p-4'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{padding: 0.6}}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default QuestionsFlow;
