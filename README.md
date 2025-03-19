# React To-Do List with Supabase

A simple and efficient to-do list application built with React and Supabase for backend services, developed just for fun.

## Features

- User authentication with Supabase
- Create, update, and delete tasks
- Realtime synchronization of tasks
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Authentication, Realtime)
- **State Management:** React Hooks

## Installation

### Prerequisites
- Node.js (Latest LTS recommended)
- Supabase account

### Steps

1. **Clone the repository**
   ```sh
   git clone https://github.com/entrinax22/react_todolist_supabase.git
   cd react-todo-supabase
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory and add the following:
   ```sh
   REACT_APP_SUPABASE_URL=your-supabase-url
   REACT_APP_SUPABASE_ANON_KEY=your-anon-key
   ```
   - Replace `your-supabase-url` and `your-anon-key` with your actual Supabase project credentials.

4. **Run the development server**
   ```sh
   npm start
   ```

## Usage

1. Sign up or log in using Supabase authentication.
2. Add new tasks to the list.
3. Mark tasks as completed or delete them.
4. Tasks update in real-time across all devices.

## Deployment

To deploy the application, you can use platforms like Vercel or Netlify.

1. **Build the app**
   ```sh
   npm run build
   ```
2. **Deploy using Vercel**
   ```sh
   npm install -g vercel
   vercel
   ```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

