
# 📰 BlogSphere
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
BlogSite With Comment, Like, and Share Features
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Blogsphere is a MERN stack web application where users can create, read, comment, like, and share blogs in a clean and user-friendly interface.
It provides a dynamic platform for readers and writers to connect through interactive discussions and effortless blog management.
 
🚀 Features
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

✍ Create & Publish Blogs – Add new posts with titles, content, and images.

📖 Read Blogs – View all published blogs in a responsive feed.

💬 Comment System – Readers can express opinions under each post.

❤ Like Feature – Users can like their favorite blogs.

🔗 Share Blogs – Share blog links via social media or directly.

🧭 Smooth Navigation – Fast and interactive routing using React Router (frontend).

🧠 MongoDB Database – Stores all blogs, comments, likes, and user details.

🔒 Secure Operations – Authentication and middleware validation included.


🧰 Tech Stack
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


| Layer          | Technology                        |
| -------------- | --------------------------------- |
| *Frontend*   | React.js, HTML5, CSS3, JavaScript |
| *Backend*    | Node.js, Express.js               |
| *Database*   | MongoDB                           |
| *Tools Used* | VS Code, npm                      |


📂 Project Structure
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------



      NewBlog/
      │
      ├── package.json
      ├── package-lock.json
      │
      ├── backend/
      │   ├── server.js                # Entry point for backend
      │   ├── .env                     # Environment variables
      │   ├── package.json             # Backend dependencies
      │   │
      │   ├── config/
      │   │   └── db.js                # MongoDB connection
      │   │
      │   ├── middleware/
      │   │   └── authMiddleware.js    # Authentication and protection logic
      │   │
      │   ├── models/
      │   │   ├── Comment.js           # Schema for comments
      │   │   ├── Like.js              # Schema for likes
      │   │   ├── Post.js              # Schema for blog posts
      │   │   └── User.js              # Schema for users
      │   │
      │   └── node_modules/
      │
      └── frontend/
      



⚙ Setup Guide
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Follow these steps to run the backend and frontend locally.

1️⃣ Clone the Repository
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

git clone https://github.com/your-username/blogsphere.git
cd blogsphere/NewBlog


2️⃣ Backend Setup
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    cd backend
    npm install
    npm start


3️⃣ Frontend Setup
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If your React frontend folder exists (for example client/), run:


    cd ../client
    npm install
    npm start


    Frontend runs at:
    👉 http://localhost:3000
