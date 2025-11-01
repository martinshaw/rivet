/*
All Rights Reserved, (c) 2025 rivet

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-10-30T08:54:59.380Z
Modified:    2025-10-30T08:54:59.380Z
File Name:   Index.tsx

Description:

*/

import React from 'react';
import Layout from '../from_alexs_site/Layout/Layout';
import FromAlexsSitePartners from '../from_alexs_site/src/pages/Partners';

export type PartnersProps = {
    //
}

export default function Partners(props: PartnersProps) {
    return (
        <FromAlexsSitePartners {...props} />
    );
}

Partners.layout = (page: any) => <Layout children={page} title="Partners" />
