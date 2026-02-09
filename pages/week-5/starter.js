// TODO: add import for state and set this as a client rendered file

// Sample data for filtering exercise
const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 999 },
  { id: 2, name: "Desk Chair", category: "furniture", price: 199 },
  { id: 3, name: "Notebook", category: "stationery", price: 5 },
  { id: 4, name: "Headphones", category: "electronics", price: 149 },
  { id: 5, name: "Desk Lamp", category: "furniture", price: 45 },
  { id: 6, name: "Pen Set", category: "stationery", price: 12 },
];

export default function StateEventsLab() {
  // TODO: Add state variables as needed for each problem

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold mb-8">State and Events Lab</h1>

      {/* PROBLEM 1 & 2: Counter with Increase/Decrease + Disabled State */}
      <section className="border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Problems 1 & 2: Counter with Disable
        </h2>
        <p className="text-gray-600 mb-2">
          <strong>Problem 1:</strong> Create a counter that displays a number
          and has buttons to increase and decrease it.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Problem 2:</strong> Add a checkbox that disables/enables the
          counter buttons.
        </p>

        {/* TODO (Problem 2): Add state to track disabled status */}
        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Disable counter buttons</span>
          </label>
        </div>

        {/* TODO (Problem 1): Display the counter value */}
        <div className="text-2xl mb-4">Count: 0</div>

        {/* TODO (Problem 1): Add onClick handlers to modify the counter */}
        {/* TODO (Problem 2): Add disabled={isDisabled} attribute to both buttons */}
        <div className="space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed">
            Increase
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed">
            Decrease
          </button>
        </div>
      </section>

      {/* PROBLEM 3: Theme Toggle on Card */}
      <section className="border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Problem 3: Theme Toggle</h2>
        <p className="text-gray-600 mb-4">
          Toggle between two different color themes for the card below.
        </p>

        {/* TODO: Add state to track current theme (light/dark or theme1/theme2) */}
        {/* TODO: Conditionally apply different Tailwind classes based on theme state */}
        <div className="p-6 rounded-lg bg-slate-100 text-slate-900">
          <h3 className="text-lg font-semibold mb-2">Sample Card</h3>
          <p>This card should change colors when you click the button.</p>
        </div>

        {/* TODO: Add onClick handler to toggle theme */}
        <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded">
          Toggle Theme
        </button>
      </section>

      {/* PROBLEM 4: Filter Array by Category */}
      <section className="border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Problem 4: Filter Products
        </h2>
        <p className="text-gray-600 mb-4">
          When a category button is clicked, display only products from that
          category. The "All" button should display all products.
        </p>

        {/* TODO: Add state to store which products to display (start with all products) */}
        {/* TODO: Create a function that filters the products array based on category */}
        {/* TODO: Add onClick handlers that call your filter function and update state */}
        <div className="space-x-2 mb-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded">
            All
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Electronics
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Furniture
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Stationery
          </button>
        </div>

        {/* TODO: Map over your state variable and display each product */}
        <div className="space-y-2">
          <p className="text-gray-500">Filtered products will appear here...</p>
          {/* Example of what a product item might look like:
          <div className="p-3 bg-gray-50 rounded">
            <span className="font-semibold">Product Name</span> -
            <span className="text-gray-600"> Category</span> -
            <span className="text-green-600"> $Price</span>
          </div>
          */}
        </div>
      </section>

      {/* PROBLEM 5: Show/Hide Content Toggle */}
      <section className="border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Problem 5: Show/Hide Toggle
        </h2>
        <p className="text-gray-600 mb-4">
          Create a button that shows and hides the content below. The button
          text should change based on whether content is visible.
        </p>

        {/* TODO: Add state to track whether content is visible (boolean) */}
        {/* TODO: Add onClick handler to toggle the visibility state */}
        {/* TODO: Use ternary operator to change button text between "Show" and "Hide" */}
        <button className="px-4 py-2 bg-indigo-500 text-white rounded mb-4">
          Show Details
        </button>

        {/* TODO: Use conditional rendering (&&) to show/hide this content based on state */}
        <div className="p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <h3 className="font-semibold mb-2">Hidden Content</h3>
          <p>
            This content should toggle on and off when you click the button
            above.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            This pattern is commonly used for FAQs, expandable sections, and
            accordions.
          </p>
        </div>
      </section>
    </div>
  );
}
