import type { Config } from "tailwindcss";
 
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			background: 'hsl(0, 0%, 95%)', // Light grayish background
			foreground: 'hsl(0, 0%, 10%)', // Dark text color for contrast
			card: {
			  DEFAULT: 'hsl(0, 0%, 90%)', // Slightly darker for cards
			  foreground: 'hsl(0, 0%, 20%)' // Dark text for card content
			},
			popover: {
			  DEFAULT: 'hsl(200, 100%, 50%)', // Bright blue popover background
			  foreground: 'hsl(0, 0%, 10%)' // White or near-white text
			},
			primary: {
			  DEFAULT: 'hsl(200, 100%, 50%)', // Bright blue primary color
			  foreground: 'hsl(0, 0%, 100%)' // White foreground for primary elements
			},
			secondary: {
			  DEFAULT: 'hsl(50, 100%, 50%)', // Bright yellow secondary color
			  foreground: 'hsl(0, 0%, 10%)'
			},
			muted: {
			  DEFAULT: 'hsl(0, 0%, 75%)', // Muted gray background
			  foreground: 'hsl(0, 0%, 20%)'
			},
			accent: {
			  DEFAULT: 'hsl(350, 100%, 50%)', // Red accent color
			  foreground: 'hsl(0, 0%, 100%)'
			},
			destructive: {
			  DEFAULT: 'hsl(0, 100%, 50%)', // Bright red for destructive actions
			  foreground: 'hsl(0, 0%, 100%)'
			},
			border: 'hsl(0, 0%, 50%)', // Dark gray border
			input: 'hsl(0, 0%, 90%)', // Light gray input field background
			ring: 'hsl(200, 100%, 70%)', // Slightly lighter blue for focus ring
			chart: {
			  '1': 'hsl(50, 100%, 60%)',
			  '2': 'hsl(350, 100%, 60%)',
			  '3': 'hsl(200, 100%, 60%)',
			  '4': 'hsl(150, 100%, 60%)',
			  '5': 'hsl(100, 100%, 60%)'
			}
		  },
		  borderRadius: {
			lg: '12px',  // Increase border radius for buttons or cards
			md: '8px',   // Slightly rounded
			sm: '4px'    // Minimal rounding
		  }		  
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
