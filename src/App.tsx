import Dialog from './components/Dialog';
import DialogWithBackdrop from './components/DialogWithBackdrop';
import Modal from './components/Modal';
import './App.css';

function App() {
  return (
    <>
      <div className="block">
        <h2>Dialog</h2>
        <Dialog triggerText={'open'}>
          <>
            <h3>Thumbs up</h3>
            <ul>
              <li>
                Modal box is centered without any css code and browsers give it
                basic styling.
              </li>
              <li>Automatically focused if there are inputs inside.</li>
              <li>
                Clicking Escape key closes dialog without event implementation.
              </li>
            </ul>
            <h3>Thumbs down</h3>
            <ul>
              <li>
                Default backdrop is not bad but we can't apply animations on it.
              </li>
              <li>
                No closing function with clicking backdrop, so we need to make
                it.
              </li>
            </ul>
            <div>
              <input type="text" placeholder="autofocus here" />
            </div>
          </>
        </Dialog>
      </div>
      <div className="block">
        <h2>Dialog with additional backdrop</h2>
        <DialogWithBackdrop triggerText={'open'}>
          <>
            <h3>Thumbs up</h3>
            <ul>
              <li>
                Again, modal box is centered without css and browser gives it
                basic styling.
              </li>
              <li>Automatically focused if there are inputs inside.</li>
              <li>
                Clicking Escape key closes dialog without event implementation.
              </li>
              <li>Able to add animations to backdrop.</li>
            </ul>
            <h3>Thumbs down</h3>
            <ul>
              <li>
                Requiring to implement additional backdrop element with its
                appearance & motions but codes are less than old ways.
              </li>
              <li>
                Additionaly, we also need to control event of backdrop clicking.
              </li>
            </ul>
            <div>
              <input type="text" placeholder="autofocus here" />
            </div>
          </>
        </DialogWithBackdrop>
      </div>
      <div className="block">
        <h2>Modal</h2>
        <Modal triggerText={'open'}>
          <>
            <h3>Thumbs up</h3>
            <ul>
              <li>
                Good old tips working well to controll all aspects of modals.
              </li>
            </ul>
            <h3>Thumbs down</h3>
            <ul>
              <li>Need to write css for centering & other appearance.</li>
              <li>
                Requiring implementation of event handlers for backdrop &
                closebuttons.
              </li>
              <li>
                Requiring implementation of click event for Escape key function.
              </li>
            </ul>
            <div>
              <input type="text" placeholder="not focusing automaticaly" />
            </div>
          </>
        </Modal>
      </div>
    </>
  );
}

export default App;
