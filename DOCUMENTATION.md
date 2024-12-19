# BossBlock Frontend Documentation

## Project Structure

```
bossblock-frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/       # React context providers
│   ├── features/      # Feature-specific components
│   ├── helper/        # Helper utilities
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── services/      # API services
│   └── ui/           # UI components library
├── public/           # Static assets
└── config files      # Various configuration files
```

## Key Components

### 1. Components Directory
- Contains reusable UI components used across the application
- Each component follows a modular structure with its own styles and tests
- 29 components including forms, buttons, and layout elements

### 2. Features Directory
- Contains feature-specific implementations
- Each feature is self-contained with its own components and logic
- 3 main feature modules

### 3. Pages Directory
- Contains 14 main page components
- Each page represents a distinct route in the application
- Includes game pages, profile pages, and administrative interfaces

### 4. Services Directory
- Contains 6 service modules for API communication
- Handles all backend interactions
- Implements error handling and response parsing

### 5. UI Directory
- Contains 75 UI components
- Implements design system
- Includes animations and interactive elements

## Technology Stack

- **Core**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.13
- **State Management**: React Query 5.56.2
- **Routing**: React Router 6.26.2
- **HTTP Client**: Axios 1.7.7
- **Animation**: Framer Motion 11.11.17

## Development Setup

### Prerequisites
```bash
Node.js (Latest LTS version)
npm or yarn
```

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Configuration

Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:8001  # Point-user microservice
VITE_GAME_API_URL=http://localhost:8002  # User-game microservice
```

## Code Style and Standards

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture
- Custom hooks for reusable logic

## Testing

- Unit tests for components
- Integration tests for features
- End-to-end testing capabilities
- Test utilities in helper directory

## Performance Optimization

- Code splitting using React.lazy
- Image optimization
- Caching strategies
- Bundle size optimization

## Security Considerations

- Input validation
- XSS prevention
- CORS configuration
- Secure API communication

## Deployment

1. Build the application:
```bash
npm run build
```

2. The build output will be in the `dist` directory

3. Deploy the contents of `dist` to your hosting service

## Common Issues and Solutions

1. **Build Errors**
   - Clear node_modules and package-lock.json
   - Run npm install fresh
   - Check for TypeScript errors

2. **API Connection Issues**
   - Verify API URLs in .env
   - Check CORS settings
   - Confirm backend services are running

3. **Performance Issues**
   - Check bundle size
   - Optimize image assets
   - Review React component renders
