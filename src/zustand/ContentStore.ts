import { create } from 'zustand';

// Define the state structure with TypeScript interface
interface ContentState {
  content: string | null; // Allowing null for initial state, consider using a specific type instead of any
  contentObject: any; // Ideally, define a more specific type
  setContent: (content: string | null) => void;
  setContentObject: (contentObject: any) => void; // Adjust the type to be more specific if possible
}

const useContentStore = create<ContentState>((set) => ({
  content: null, // Initialize the content as null
  contentObject: {}, // Initialize the contentObject, adjust as needed
  setContent: (content) => set({ content }), // Function to update the content
  setContentObject: (contentObject) => set({ contentObject }), // Function to update the contentObject
}));

export default useContentStore;