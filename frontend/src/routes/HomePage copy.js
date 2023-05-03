import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Home.scss";
import "./HomePage.scss";
import homePositionIcon from '../assets/images/HomePosition_wHands.svg';
import increasingGraphIcon from '../assets/images/IncreasingGraph.svg';
import learnKeyBoardIcon from '../assets/images/LearnKeyboardInThreeRows.svg';
import stickyKeyNoteReminder from '../assets/images/StickyNoteReminder.svg';
class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-heading">
            <h1>Learn how to type</h1>
        </div>
        <div id="centerConsoleWrap" class="grid grid-pad">
          <div class="col-1-2">
            <div class="square">
              <div class="numbered">Step 1</div>
              <h2>Learn Home Position</h2>
              <img src={homePositionIcon} />
              <div class="imgCaption">Home Position</div>
              <div class="insideText">
                <h3>What to Learn:</h3>
                <ul>
                  <li>
                    The "Home Position" - where you place all your fingers
                    before starting to type.
                  </li>
                  <li>
                    Find the home position <strong>without looking</strong> at
                    your keyboard.
                  </li>
                </ul>
                <h3>Target:</h3>
                <ul>
                  <li>
                    Put fingers in home position quickly without looking at your
                    keyboard.
                  </li>
                </ul>
                <h3>How to Learn:</h3>
                <ul class="actionItems">
                  <li>
                    Complete the <a href="/keyboard-basics">Keyboard Basics</a>
                  </li>
                  <li>
                    Start{" "}
                    <a href="/typing-tutor.php?mod=1" class="orange">
                      Home Row Lessons
                    </a>{" "}
                    in the Typing Tutor
                  </li>
                </ul>
              </div>
            </div>
            <div class="plug"></div>
            <div class="square">
              <div class="numbered">Step 3</div>
              <h2>Learn Muscle Memory</h2>
              <img
                src={stickyKeyNoteReminder}
                style={{"max-width": "300px"}}
              />
              <div class="imgCaption">Frequent Practice = "Muscle Memory"</div>
              <div class="insideText">
                <h3>What to Learn:</h3>
                <ul>
                  <li>
                    Fingers seem to "know" the right key without you thinking.
                  </li>
                  <li>Shift key.</li>
                </ul>
                <h3>Target:</h3>
                <ul>
                  <li>
                    Type any letter correctly without having to think where it
                    is - and congratulations! You have learned how to
                    touch-type!
                  </li>
                </ul>
                <h3>How to Learn:</h3>
                <ul class="actionItems">
                  <li>Practice typing daily - at least 10 minutes.</li>
                  <li>
                    Complete all{" "}
                    <a href="/typing-tutor.php?mod=28" class="orange">
                      Typing Lesson Reviews
                    </a>{" "}
                    (Reviews 11-15)
                  </li>
                  <li>
                    Complete all{" "}
                    <a href="/typing-tutor.php?mod=33" class="darkBlue">
                      Advanced Lessons
                    </a>{" "}
                    (Advanced Lessons 1-11)
                  </li>
                  <li>
                    Practice Typing Tests with easy texts:{" "}
                    <a href="/typing-test?ttdl=FABLES">Fables Typing Test</a>
                  </li>
                  <li>
                    Practice{" "}
                    <a href="/games/type-the-alphabet">Typing the Alphabet</a>{" "}
                    as fast as you can!
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-1-2">
            <div class="plug"></div>
            <div class="square">
              <div class="numbered">Step 2</div>
              <h2>Learn Keys by Rows</h2>
              <img src={learnKeyBoardIcon} />
              <div class="imgCaption">Learn Keyboard by Rows</div>
              <div class="insideText">
                <h3>What to Learn:</h3>
                <ul>
                  <li>
                    The locations of all keys (relative to home position).
                  </li>
                  <li>
                    Divide keyboard into 3 rows and learn 1 row at a time.
                  </li>
                  <li>Habit of not looking down at your keyboard.</li>
                </ul>
                <h3>Target:</h3>
                <ul>
                  <li>
                    Type any letter correctly without looking at your keyboard.
                  </li>
                </ul>
                <h3>How to Learn:</h3>
                <ul class="actionItems">
                  <li>
                    Complete the{" "}
                    <a href="/typing-tutor.php?mod=1" class="orange">
                      Home Row Lessons
                    </a>{" "}
                    (Lessons 1-5)
                  </li>
                  <li>
                    Complete the{" "}
                    <a href="/typing-tutor.php?mod=6" class="purple">
                      Top Row Lessons
                    </a>{" "}
                    (Lessons 6-10)
                  </li>
                  <li>
                    Complete the{" "}
                    <a href="/typing-tutor.php?mod=11" class="brightBlue">
                      Bottom Row Lessons
                    </a>{" "}
                    (Lessons 11-15)
                  </li>
                  <li>
                    Practice{" "}
                    <a href="/games/type-the-alphabet">Typing the Alphabet</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="plug"></div>
            <div class="square">
              <div class="numbered">Step 4</div>
              <h2>Learn Speed (Optional)</h2>
              <img
                src={increasingGraphIcon}
                style={{"max-width": "450px"}}
              />
              <div class="imgCaption">
                Typing Speed Increases through Practice
              </div>
              <div class="insideText">
                <h3>What to Learn:</h3>
                <ul>
                  <li>Typing words instead of individual letters.</li>
                  <li>Thinking ahead of what you're typing.</li>
                </ul>
                <h3>Target:</h3>
                <ul>
                  <li>
                    Constantly increasing typing speed while maintaining
                    accuracy and correct technique.
                  </li>
                </ul>
                <h3>How to Learn:</h3>
                <ul class="actionItems">
                  <li>Practice typing daily - at least 10 minutes.</li>
                  <li>
                    Practice <a href="/typing-test">Typing Tests</a>
                  </li>
                  <li>
                    Practice{" "}
                    <a href="/typing-games" class="darkBlue">
                      Typing Games
                    </a>
                  </li>
                  <li>
                    Focus on{" "}
                    <a href="/typing-test?ttdl=RANDOM_WORDS" class="brightBlue">
                      most common words
                    </a>
                  </li>
                  <li>
                    <a href="/register" class="orange">
                      Create an account
                    </a>{" "}
                    to track your typing test stats - a heatmap will be
                    generated showing your slowest keys to focus on.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.admin.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
