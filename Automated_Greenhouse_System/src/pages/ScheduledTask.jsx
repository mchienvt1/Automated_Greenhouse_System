import React from 'react'
import { useState, useEffect } from 'react';
import TaskTable from '../components/TaskTable';
function ScheduledTask() {
  useEffect(() => {
    document.title = 'Scheduled Task'
  });

  return (
    <TaskTable />
   )
}

export default ScheduledTask