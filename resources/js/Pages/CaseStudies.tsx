/*
All Rights Reserved, (c) 2025 rivet

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-10-30T08:54:59.380Z
Modified:    2025-10-30T08:54:59.380Z
File Name:   Index.tsx

Description:

*/

import Layout from '../Layouts/Layout';
import FromAlexsSiteCaseStudies from '../from_alexs_site/src/pages/CaseStudies';

export default function CaseStudies() {
    return (
        <FromAlexsSiteCaseStudies />
    );
}

CaseStudies.layout = (page: any) => <Layout children={page} title="Case Studies" />
