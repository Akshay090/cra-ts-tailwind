import React, { FunctionComponent } from 'react';

interface Props {}

const App: FunctionComponent = (_props: Props) => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-black">
            <div className="px-6 py-4 font-sans text-2xl text-gray-300 bg-gray-900">cra-ts-tailwind</div>
        </div>
    );
};

export default App;
