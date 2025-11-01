/*
All Rights Reserved, (c) 2025 rivet

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-10-30T08:54:59.380Z
Modified:    2025-10-30T08:54:59.380Z
File Name:   Index.tsx

Description:

*/

import Layout from '../Layouts/Layout';
import FromAlexsSiteConfidentiality from '../from_alexs_site/src/pages/Confidentiality';

export default function Confidentiality() {
    return (
        <FromAlexsSiteConfidentiality />
    );
}

Confidentiality.layout = (page: any) => <Layout children={page} title="Confidentiality" />
