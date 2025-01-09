import { Button } from "@/components/ui/button";

const UnoPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-700 text-white">
      <div className="text-center p-8 bg-white bg-opacity-30 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-900">Welcome to Uno Page</h1>
        <p className="text-lg mb-6 text-blue-800">
          This is a beautifully styled page using <span className="font-bold">Tailwind CSS</span> and{" "}
          <span className="font-bold">ShadCN UI</span> components.
        </p>
        <Button
          onClick={() => alert("Button clicked!")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Click Me!
        </Button>
      </div>
    </div>
  );
};

export default UnoPage;
