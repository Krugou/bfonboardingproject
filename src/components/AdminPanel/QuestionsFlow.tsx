import React, { useCallback } from 'react';
import {ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
  MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {useEffect} from 'react';

import { QuestionItem } from '../../app/types';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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
  // Create initial nodes from questions
  const renderNodeButtons = (question: QuestionItem, index: number) => (
    <div className="flex flex-col gap-2">
      <button
        className={`p-1.5 rounded text-white ${
          question.locked ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'
        }`}
        onClick={() => toggleLock(index)}
      >
        {question.locked ? <LockOpenIcon fontSize="small" /> : <LockIcon fontSize="small" />}
      </button>
      {!question.locked && (
        <>
          <button
            title='Edit question'
            className='bg-green-500 hover:bg-green-700 text-white p-1.5 rounded'
            onClick={() => handleEdit(question)}
          >
            <EditIcon fontSize="small" />
          </button>
          <button
            title='Move question up'
            className='bg-gray-500 hover:bg-gray-700 text-white p-1.5 rounded'
            onClick={() => moveQuestion(index, 'up')}
          >
            <ArrowUpwardIcon fontSize="small" />
          </button>
          <button
            title='Move question down'
            className='bg-gray-500 hover:bg-gray-700 text-white p-1.5 rounded'
            onClick={() => moveQuestion(index, 'down')}
          >
            <ArrowDownwardIcon fontSize="small" />
          </button>
        </>
      )}
    </div>
  );

  // Update the node data structure in both initialNodes and useEffect
  const nodeContent = (question: QuestionItem, index: number) => ({
    id: question.id,
    // Increase Y spacing from 150 to 250
    position: { x: 100, y: index * 250 },
    data: {
      label: (
        <div className="p-4 border border-black rounded-xl flex items-center gap-4 min-w-[400px] bg-white">
          <div className="flex-grow">
            <div className="font-bold text-lg">{question.id}</div>
            <div className="text-gray-700 mt-2">{question.question[language]}</div>
            <div className="text-sm text-gray-500 mt-1">{question.answerType}</div>
          </div>
          {/* Buttons container */}
          <div className="flex flex-col gap-2 ml-4">
            {renderNodeButtons(question, index)}
          </div>
        </div>
      )
    },
    type: 'default',
  });

  // Update initialNodes
  const initialNodes = questions.map((question, index) => nodeContent(question, index));

  // Create edges between nodes
  const initialEdges = questions.map((question, index) => ({
    id: `e${index}`,
    source: question.id,
    target: questions[index + 1]?.id || '',
    markerEnd: { type: MarkerType.ArrowClosed },
    type: 'smoothstep',
  })).filter(edge => edge.target);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
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
    const newNodes = questions.map((question, index) => nodeContent(question, index));

    const newEdges = questions.map((question, index) => ({
      id: `e${index}`,
      source: question.id,
      target: questions[index + 1]?.id || '',
      markerEnd: { type: MarkerType.ArrowClosed },
      type: 'smoothstep',
    })).filter(edge => edge.target);

    setNodes(newNodes);
    setEdges(newEdges);
  }, [questions, language]);

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default QuestionsFlow;
