import {
  addEdge,
  Background,
  Controls,
  MarkerType,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import React, {useCallback, useEffect, useState, useLayoutEffect} from 'react';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {doc, getDoc, updateDoc} from 'firebase/firestore';
import {QuestionItem} from '../../app/types';
import {db} from '../../utils/firebase';

interface QuestionsFlowProps {
  questions: QuestionItem[];
  language: 'en' | 'fi';
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

  const renderNodeButtons = (question: QuestionItem, index: number) => (
    <div className='flex flex-col gap-2'>
      <button
        className={`p-1.5 rounded text-white ${
          question.locked
            ? 'bg-red-500 hover:bg-red-700'
            : 'bg-blue-500 hover:bg-blue-700'
        }`}
        onClick={() => toggleLock(index)}>
        {question.locked ? (
          <LockOpenIcon fontSize='small' />
        ) : (
          <LockIcon fontSize='small' />
        )}
      </button>
      {!question.locked && (
        <>
          <button
            title='Edit question'
            className='bg-green-500 hover:bg-green-700 text-white p-1.5 rounded'
            onClick={() => handleEdit(question)}>
            <EditIcon fontSize='small' />
          </button>
          <button
            title='Move question up'
            className='bg-gray-500 hover:bg-gray-700 text-white p-1.5 rounded'
            onClick={() => moveQuestion(index, 'up')}>
            <ArrowUpwardIcon fontSize='small' />
          </button>
          <button
            title='Move question down'
            className='bg-gray-500 hover:bg-gray-700 text-white p-1.5 rounded'
            onClick={() => moveQuestion(index, 'down')}>
            <ArrowDownwardIcon fontSize='small' />
          </button>
        </>
      )}
    </div>
  );

  const nodeContent = (question: QuestionItem, index: number) => ({
    id: question.id,
    position: {x: 100, y: index * 250},
    data: {
      label: (
        <div className='p-4 border border-black rounded-xl flex items-center gap-4 min-w-[200px] bg-white'>
          <div className='flex-grow'>
            <div className='font-bold text-lg'>{question.id}</div>
            <div className='text-gray-700 mt-2'>
              {question.question[language]}
            </div>
            <div className='text-sm text-gray-500 mt-1'>
              {question.answerType}
            </div>
          </div>
          <div className='flex flex-col gap-2 ml-4'>
            {renderNodeButtons(question, index)}
          </div>
        </div>
      ),
    },
    type: 'default',
  });

  const initialNodes = questions.map((question, index) =>
    nodeContent(question, index),
  );

  const initialEdges = questions
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

  useEffect(() => {
    const newNodes = questions.map((question, index) =>
      nodeContent(question, index),
    );

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
      style={{width: '100%', height: '800px'}}
      className='bg-black/20 rounded-xl m-2 p-4'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{padding: 0.2}}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default QuestionsFlow;
