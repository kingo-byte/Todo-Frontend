import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TaskService } from '../../../core/services/task.service';
import {
  loadTasks,
  loadTasksSuccess,
  loadTasksFailure,
  addTask,
  addTaskSuccess,
  addTaskFailure,
  toggleTask,
  toggleTaskSuccess,
  toggleTaskFailure,
  deleteTask,
  deleteTaskSuccess,
  deleteTaskFailure,
} from './task.actions';
import { Store } from '@ngrx/store';
import { selectTaskEntities } from './task.selectors';
import { take } from 'rxjs';

export const loadTasksEffect = createEffect(
  (actions$ = inject(Actions), taskService = inject(TaskService)) =>
    actions$.pipe(
      ofType(loadTasks),
      switchMap(() =>
        taskService.getAll().pipe(
          map((tasks) => loadTasksSuccess({ tasks })),
          catchError((err) => of(loadTasksFailure({ error: err.message }))),
        ),
      ),
    ),
  { functional: true },
);

export const addTaskEffect = createEffect(
  (actions$ = inject(Actions), taskService = inject(TaskService)) =>
    actions$.pipe(
      ofType(addTask),
      switchMap(({ title }) =>
        taskService.add(title).pipe(
          map((task) => addTaskSuccess({ task })),
          catchError((err) => of(addTaskFailure({ error: err.message }))),
        ),
      ),
    ),
  { functional: true },
);

export const toggleTaskEffect = createEffect(
  (actions$ = inject(Actions), taskService = inject(TaskService), store = inject(Store)) =>
    actions$.pipe(
      ofType(toggleTask),
      switchMap(({ id }) =>
        store.select(selectTaskEntities).pipe(
          take(1),
          switchMap((entities) => {
            const task = entities[id]!;
            return taskService.toggle(task).pipe(
              map((updated) => toggleTaskSuccess({ task: updated })),
              catchError((err) => of(toggleTaskFailure({ error: err.message }))),
            );
          }),
        ),
      ),
    ),
  { functional: true },
);

export const deleteTaskEffect = createEffect(
  (actions$ = inject(Actions), taskService = inject(TaskService)) =>
    actions$.pipe(
      ofType(deleteTask),
      switchMap(({ id }) =>
        taskService.delete(id).pipe(
          map(() => deleteTaskSuccess({ id })),
          catchError((err) => of(deleteTaskFailure({ error: err.message }))),
        ),
      ),
    ),
  { functional: true },
);
