import React, { useState } from 'react';

const DiscussionForum = () => {
  const [dropdownExpanded, setDropdownExpanded] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(Array(3).fill(false));

  const toggleDropdown = () => {
    setDropdownExpanded(!dropdownExpanded);
  };

  const toggleComments = (index) => {
    const newCommentsVisible = [...commentsVisible];
    newCommentsVisible[index] = !newCommentsVisible[index];
    setCommentsVisible(newCommentsVisible);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-6">
        <header>
          <h2 className="text-xl font-bold mb-2 flex items-center justify-between">
            <span>Lesson Title</span>
            <button onClick={toggleDropdown} className="text-blue-500">
              Activity Title <i className={`fa fa-angle-right ${dropdownExpanded ? 'rotate-90' : ''}`}></i>
            </button>
          </h2>
        </header>
        {dropdownExpanded && (
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <div className="panel">
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Activity Title</h2>
                    <span>2/4</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="response mt-6">
          <div className="flex items-center mb-4">
            <div className="text-2xl font-bold bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
              1
            </div>
            <h1 className="ml-4 text-lg font-medium">
              Coffee emporium avondale humid german rivertown vine street findlay market historic architecture?
            </h1>
          </div>
          <div className="post-group space-y-6">
            {[1, 2, 3].map((post, idx) => (
              <div key={idx} className="post bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="post__avatar bg-gray-300 w-10 h-10 rounded-full"></div>
                  <div className="ml-3">
                    <h3 className="text-sm font-bold">Lester McTester</h3>
                    <h4 className="text-xs text-gray-500">Oct 13 at 8:51pm</h4>
                  </div>
                </div>
                <p className="post__body text-gray-700">
                  Hamilton county river front museum center washington park breweries walnut hills findlay market
                  christian moerlein flying pig ohio valley jazz festival union terminal fifty west coffee emporium chili.
                </p>
                <div className="post__actions flex space-x-2 mt-4">
                  <button className="flex items-center text-gray-600 hover:text-blue-600">
                    <i className="fa fa-thumbs-o-up mr-1"></i>
                    <span>Approve</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-600">
                    <i className="fa fa-thumbs-o-down mr-1"></i>
                    <span>Deny</span>
                  </button>
                  <button
                    className="flex items-center text-gray-600 hover:text-blue-600"
                    onClick={() => toggleComments(idx)}
                  >
                    <span>Comment...</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-600">
                    <i className="fa fa-comment-o mr-1"></i>
                    <span>2</span>
                  </button>
                </div>
                {commentsVisible[idx] && (
                  <div className="post__comments mt-4">
                    <div className="comment-group space-y-4">
                      {[1, 2].map((comment, cIdx) => (
                        <div key={cIdx} className="post flex items-start space-x-3">
                          <div className="post__avatar bg-gray-300 w-8 h-8 rounded-full"></div>
                          <div>
                            <h3 className="text-sm font-bold">Lester McTester</h3>
                            <h4 className="text-xs text-gray-500">Oct 13 at 8:51pm</h4>
                            <p className="post__body text-gray-700">
                              Hamilton county river front museum center washington park breweries walnut hills findlay
                              market christian moerlein flying pig ohio valley jazz festival union terminal fifty west
                              coffee emporium chili.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="comment-form flex items-start space-x-3 mt-4">
                      <div className="comment-form__avatar bg-gray-300 w-8 h-8 rounded-full"></div>
                      <textarea className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
                      <div className="comment-form__actions space-x-2">
                        <button className="px-4 py-2 bg-gray-200 rounded-lg">Cancel</button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Comment</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;
