import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSearchReportsMutation } from '../state/api/reportsSlice.js';
import { useState } from 'react';

export default function ReportRequestWrapper() {
  const [resourceData, setResourceData] = useState(null);
  const [searchReports, { data, error, isSuccess, isError }] =
    useSearchReportsMutation();

  const {
    location: { state },
  } = useOutletContext();
  return <div>ReportRequestWrapper</div>;
}
