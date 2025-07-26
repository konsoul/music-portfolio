# Music Portfolio App Flow Documentation

## Overview

A React-based music portfolio application built with Vite, designed to showcase and play Bradley Rappa's music collection. The app features a retro Windows 95-style UI with a sidebar for song selection and an integrated audio player.

## Project Structure

```
music-portfolio/
├── public/
│   ├── music-icon.svg          # App favicon
│   └── vite.svg               # Vite logo
├── src/
│   ├── assets/                # Audio files storage
│   │   ├── A Week.mp3
│   │   ├── Back Home Again Cover.mp3
│   │   ├── Country Boy Needs the Country.mp3
│   │   ├── God Rest Ye Merry Gentlemen.mp3
│   │   ├── The House That Wasn't.mp3
│   │   └── zone.mp3
│   ├── components/
│   │   ├── AudioPlayer.jsx    # Core audio playback component
│   │   ├── ProgressBar.jsx    # Audio progress visualization
│   │   └── ui/
│   │       ├── Layout.jsx     # Main app layout wrapper
│   │       └── Sidebar.jsx    # Song selection sidebar
│   ├── utils/
│   │   ├── metadata.js        # Audio metadata parsing
│   │   └── songData.js        # Song title mapping
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # React entry point
│   ├── App.css               # Tailwind imports
│   └── index.css             # Global styles & Windows 95 theme
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

## Application Flow

### 1. Application Bootstrap

**File:** `src/main.jsx`

- React app initialization with StrictMode
- Mounts App component to DOM root element

### 2. Main App Component

**File:** `src/App.jsx`

#### State Management:

- `songs` - Array of loaded song objects with metadata
- `currentSong` - Currently selected/playing song object
- `isLoading` - Loading state during song initialization

#### Initialization Flow:

1. **useEffect Hook Execution:**

   - Automatically discovers all `.mp3` files in `src/assets/` using Vite's `import.meta.glob`
   - Dynamically imports each audio file
   - Processes each file through `parseMetadata()` utility
   - Filters out invalid songs and updates state
   - Sets first valid song as default current song

2. **Song Selection Handler:**

   - `handleSongSelect(song)` updates the current song when user clicks sidebar items

3. **Render Logic:**
   - Loading state: Shows "Loading songs..." message
   - Main state: Renders Layout with song title, Sidebar, and AudioPlayer

### 3. Layout System

**File:** `src/components/ui/Layout.jsx`

#### Features:

- Full-width navigation bar with app title "Bradley Rappa Music"
- Retro red (`#aa0000`) styling with black shadows
- Responsive container with max-width constraints
- Windows 95-inspired border effects

### 4. Song Selection Sidebar

**File:** `src/components/ui/Sidebar.jsx`

#### Functionality:

- Displays scrollable list of all loaded songs
- Visual indicators for currently playing song (▶ Playing)
- Interactive song selection with hover effects
- Windows 95-style button appearance with shadows
- Color-coded states:
  - Selected: Red background (`#aa0000`)
  - Unselected: Gray background (`#c0c0c0`)
  - Hover: Blue background (`#000080`)

### 5. Audio Player Component

**File:** `src/components/AudioPlayer.jsx`

#### State Management:

- `isPlaying` - Play/pause state
- `currentTime` - Current playback position
- `duration` - Total track duration

#### Audio Event Handling:

- `loadedmetadata` - Captures duration when audio loads
- `timeupdate` - Updates current time during playback
- Automatic cleanup of event listeners on component unmount

#### Controls:

- **Play/Pause Button:** Toggles audio playback
- **Restart Button:** Resets playback to beginning
- **Progress Bar:** Visual representation of playback progress

#### Audio Element:

- HTML5 `<audio>` element with preload="metadata"
- Source updates automatically when currentSong changes

### 6. Progress Bar Component

**File:** `src/components/ProgressBar.jsx`

#### Features:

- Visual progress indicator with percentage-based width
- Time display formatting (MM:SS)
- Current time and total duration display
- Smooth CSS transitions for progress updates
- Blue background (`#000080`) with red progress (`#aa0000`)

### 7. Metadata Processing

**File:** `src/utils/metadata.js`

#### Process Flow:

1. **Audio Object Creation:** Creates temporary Audio object for metadata extraction
2. **Filename Processing:**
   - Decodes URL-encoded filenames
   - Removes `.mp3` extension and random Vite suffixes
   - Extracts base filename for lookup
3. **Title Resolution:** Matches filenames to clean titles in songData
4. **Metadata Object:** Creates standardized song object with:
   - Unique ID (crypto.randomUUID())
   - Clean title from songData
   - Duration from audio metadata
   - Source URL for playback

### 8. Song Data Configuration

**File:** `src/utils/songData.js`

#### Purpose:

- Maps raw filenames to user-friendly display titles
- Allows for title customization without renaming files
- Currently contains 6 song mappings

## Technology Stack

### Core Technologies:

- **React 18.3.1** - UI framework with hooks
- **Vite 6.0.5** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### Additional Dependencies:

- **lucide-react 0.469.0** - Icon library (currently unused)
- **gh-pages 6.2.0** - GitHub Pages deployment

### Development Tools:

- **ESLint** - Code linting with React-specific rules
- **PostCSS & Autoprefixer** - CSS processing

## Design System

### Color Palette:

- **Primary Blue:** `#000080` (Background, hover states)
- **Accent Red:** `#aa0000` (Buttons, progress, selected states)
- **Gray:** `#c0c0c0` (Windows, unselected buttons)
- **Text:** White on colored backgrounds, black on gray

### Visual Style:

- **Windows 95 Aesthetic** - Retro computing interface
- **Shadow Effects** - `shadow-[8px_12px_black]` for depth
- **Border Styling** - Inset borders for authentic window appearance

## Key Features

### Audio Management:

- Automatic discovery of MP3 files
- Metadata extraction and processing
- Seamless song switching
- Play/pause/restart controls
- Real-time progress tracking

### User Experience:

- Intuitive sidebar navigation
- Visual feedback for current selection
- Loading states and error handling
- Responsive design considerations

### File Management:

- Drag-and-drop ready (add MP3 files to assets folder)
- Automatic filename processing
- Title mapping system for clean display names

## Development Workflow

### Adding New Songs:

1. Place MP3 files in `src/assets/` directory
2. Add filename-to-title mapping in `src/utils/songData.js`
3. Files automatically discovered on next app load

### Build & Deployment:

- **Development:** `npm run dev` (Vite dev server)
- **Production Build:** `npm run build`
- **Preview:** `npm run preview`
- **Deploy:** `npm run deploy` (GitHub Pages via gh-pages)

## Future Enhancement Areas

### Potential Improvements:

1. **Playlist Management** - Create and save custom playlists
2. **Audio Visualizations** - Frequency spectrum display
3. **Metadata Enhancement** - Artist, album, genre fields
4. **Keyboard Controls** - Spacebar play/pause, arrow key navigation
5. **Mobile Responsiveness** - Touch-friendly controls
6. **Search Functionality** - Filter songs by title
7. **Volume Control** - Adjustable audio levels
8. **Shuffle/Repeat** - Advanced playback modes

### Technical Debt:

- Consider implementing a state management solution (Context API/Redux) for larger scale
- Add TypeScript for better type safety
- Implement proper error boundaries
- Add comprehensive testing suite
- Optimize audio loading for better performance

---

## Quick Reference

### File Locations:

- **Audio Files:** `src/assets/*.mp3`
- **Song Titles:** `src/utils/songData.js`
- **Main Logic:** `src/App.jsx`
- **Player Logic:** `src/components/AudioPlayer.jsx`
- **Styles:** `src/index.css` (Windows 95 theme)

### Key Commands:

```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run deploy      # Deploy to GitHub Pages
```

This documentation serves as a living reference for understanding and maintaining the music portfolio application. As the project evolves, this document should be updated to reflect new features and architectural changes.
