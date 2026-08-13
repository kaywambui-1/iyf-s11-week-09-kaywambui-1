import EffectDemo from '../components/EffectDemo';
import FetchDemo from '../components/FetchDemo';
import WindowSize from '../components/WindowSize';
import ThemeToggle from '../components/ThemeToggle';
import PostListWithHook from '../components/PostListWithHook';
import Settings from '../components/Settings';
import ModalDemo from '../components/Modal';
import DemoContactForm from '../components/DemoContactForm';
import ButtonDemo from '../components/Button';
import { Button, Input, Card, Modal, Avatar } from '../components/shared';
import { useState } from 'react';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [testInput, setTestInput] = useState('');

  return (
    <div>
      <h1>Week 9 - Lesson 17 Practice</h1>

      <ThemeToggle />
      <hr />
      <EffectDemo />
      <hr />
      <FetchDemo />
      <hr />
      <WindowSize />
      <hr />
      <h2>Custom Hook Demo</h2>
      <PostListWithHook />
      <hr />
      <Settings />
      <hr />
      <ModalDemo />
      <hr />
      <DemoContactForm />
      <hr />
      <Button variant="primary" onClick={() => alert('Primary clicked')}>Primary</Button>
      <Button variant="secondary" onClick={() => alert('Secondary clicked')}>Secondary</Button>
      <div className="bg-blue-500 text-white p-4 rounded">
        If this box is blue with white text, Tailwind is working!
      </div>

      <Card title="Component Library Test">
        <Avatar name="Christine Kay" size="large" />
        <Input
          label="Test Input"
          name="test"
          value={testInput}
          onChange={(e) => setTestInput(e.target.value)}
          placeholder="Type something..."
        />
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
      </Card>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Test Modal">
        <p>If you can see this and close it, Modal works!</p>
      </Modal>
    </div>
  );
}

export default Home;