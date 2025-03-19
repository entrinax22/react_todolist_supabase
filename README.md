React To-Do List with Supabase

A simple and efficient to-do list application built with React and Supabase for backend services, developed just for fun.

Features

User authentication with Supabase

Create, update, and delete tasks

Realtime synchronization of tasks

Responsive design for mobile and desktop

Tech Stack

Frontend: React, Tailwind CSS

Backend: Supabase (PostgreSQL, Authentication, Realtime)

State Management: React Hooks

Installation

Prerequisites

Node.js (Latest LTS recommended)

Supabase account

Steps

Clone the repository

git clone https://github.com/yourusername/react-todo-supabase.git
cd react-todo-supabase

Install dependencies

npm install

Set up environment variables

Create a .env file in the root directory and add the following:

REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-anon-key

Replace your-supabase-url and your-anon-key with your actual Supabase project credentials.

Run the development server

npm start

Usage

Sign up or log in using Supabase authentication.

Add new tasks to the list.

Mark tasks as completed or delete them.

Tasks update in real-time across all devices.

Deployment

To deploy the application, you can use platforms like Vercel or Netlify.

Build the app

npm run build

Deploy using Vercel

npm install -g vercel
vercel

Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

License

This project is licensed under the MIT License.

