# My Amazon Clone

This is a React-based Amazon clone project that follows the provided guidelines. It includes features like user authentication, product listing, shopping cart management, and more.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Basic Landing page (Minimal)
- User authentication with validation
- User registration with validation
- Password reset (To be implemented)
- User dashboard
- Product listing
- Product details view
- Add products to cart
- Remove products from the cart
- Cart page
- Order listing page after clicking on the cart
- Proper folder structure and clean code
- Usage of React hooks like useState, useEffect
- Usage of keys and refs
- Usage of useCallback, useMemo, memo
- Proper component splitting and code splitting
- Proper form validation
- Proper routing structure with private page routing
- Usage of Context API and Redux where required
- Protected routing
- Axios setup and proper JWT usage
- Use of a design library (e.g., Tailwind CSS, Material-UI, Bootstrap)

## Project Structure

The project structure is organized as follows:

- `src/`: Contains all the source code for the project.
    - `components/`: Reusable React components.
    - `pages/`: Individual pages of the application.
    - `context/`: React context providers.
    - `store/`: Redux store setup.
    - `utils/`: Utility functions, including API setup and form validation.
- `public/`: Static assets and `index.html`.
- `package.json`: Dependency management and scripts configuration.
- `.env`: Store environment-specific variables (e.g., API keys).
- `.gitignore`: Specifies files and directories to be ignored by Git.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/my-amazon-clone.git
2. Navigate to the Project Directory
    ```bash
    cd my-amazon-clone
3. Install Dependencies
   ```bash
   npm install
4. Start the Development Server
    ```bash
   npm run dev
