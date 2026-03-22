import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

// Load
export const loadTasks = createAction('[Tasks] Load Tasks');
export const loadTasksSuccess = createAction('[Tasks] Load Tasks Success', props<{ tasks: Task[] }>());
export const loadTasksFailure = createAction('[Tasks] Load Tasks Failure', props<{ error: string }>());

// Add
export const addTask = createAction('[Tasks] Add Task', props<{ title: string }>());
export const addTaskSuccess = createAction('[Tasks] Add Task Success', props<{ task: Task }>());
export const addTaskFailure = createAction('[Tasks] Add Task Failure', props<{ error: string }>());

// Toggle
export const toggleTask = createAction('[Tasks] Toggle Task', props<{ id: string }>());
export const toggleTaskSuccess = createAction('[Tasks] Toggle Task Success', props<{ task: Task }>());
export const toggleTaskFailure = createAction('[Tasks] Toggle Task Failure', props<{ error: string }>());

// Delete
export const deleteTask = createAction('[Tasks] Delete Task', props<{ id: string }>());
export const deleteTaskSuccess = createAction('[Tasks] Delete Task Success', props<{ id: string }>());
export const deleteTaskFailure = createAction('[Tasks] Delete Task Failure', props<{ error: string }>());
