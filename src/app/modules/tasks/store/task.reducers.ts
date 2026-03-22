import { createFeature, createReducer, on } from '@ngrx/store';
import { initialTaskState, taskAdapter } from './task.state';
import {
  loadTasks,
  loadTasksSuccess,
  loadTasksFailure,
  addTaskSuccess,
  addTaskFailure,
  toggleTaskSuccess,
  toggleTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
} from './task.actions';

const tasksReducer = createReducer(
  initialTaskState,

  // Load
  on(loadTasks, (state) => ({ ...state, loading: true, error: null })),
  on(loadTasksSuccess, (state, { tasks }) =>
    taskAdapter.setAll(tasks, { ...state, loading: false }),
  ),
  on(loadTasksFailure, (state, { error }) => ({ ...state, loading: false, error })),

  // Add
  on(addTaskSuccess, (state, { task }) => taskAdapter.addOne(task, state)),
  on(addTaskFailure, (state, { error }) => ({ ...state, error })),

  // Toggle
  on(toggleTaskSuccess, (state, { task }) =>
    taskAdapter.updateOne({ id: task.id, changes: task }, state),
  ),
  on(toggleTaskFailure, (state, { error }) => ({ ...state, error })),

  // Delete
  on(deleteTaskSuccess, (state, { id }) => taskAdapter.removeOne(id, state)),
  on(deleteTaskFailure, (state, { error }) => ({ ...state, error })),
);

export const tasksFeature = createFeature({
  name: 'tasks',
  reducer: tasksReducer,
});
