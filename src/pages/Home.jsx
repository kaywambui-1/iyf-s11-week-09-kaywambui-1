import EffectDemo from '../components/EffectDemo';
import FetchDemo from '../components/FetchDemo';
import WindowSize from '../components/WindowSize';
import ThemeToggle from '../components/ThemeToggle';
import PostListWithHook from '../components/PostListWithHook';
import Settings from '../components/Settings';
import Modal from '../components/Modal';
import DemoContactForm from '../components/DemoContactForm';

function Home() {
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
      <Modal />
      <hr />
      <DemoContactForm />
    </div>
  );
}

export default Home;