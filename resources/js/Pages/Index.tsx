/*
All Rights Reserved, (c) 2025 rivet

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-10-30T08:54:59.380Z
Modified:    2025-10-30T08:54:59.380Z
File Name:   Index.tsx

Description:

*/

import React from 'react';

export type IndexProps = {
    //
}

export default function Index(props: IndexProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Welcome to the Rivet Application!</h1>
            <p className="mb-6 text-lg text-gray-700">This is the default index page. Start building your application here.</p>
        </div>
    );
}
