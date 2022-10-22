import _ from 'lodash';
import { FC, useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hook';
import { getWorkoutsForCalendar } from '../../store/selectors';
import { ExerciseInWorkoutOnCalendar } from '../../types/workout';
import { getListOfCompletedExercise } from '../../utils/exercise';
import { LeftSide } from './left-side';
import { RightSide } from './right-side';
import { ContainerTwoPart } from '../../compound/container-two-part';

export const AnalyticsPage: FC = () => {
    const [selectedExerciseGroup, setSelectedExerciseGroup] = useState<ExerciseInWorkoutOnCalendar[] | null>(null);
    const workoutsForCalendar = useAppSelector(getWorkoutsForCalendar);
    const exerciseWithData = _.toArray(getListOfCompletedExercise(workoutsForCalendar));

    const selectedExerciseGroupClickHandler = (exercise: ExerciseInWorkoutOnCalendar[]) => {
        setSelectedExerciseGroup(exercise);
    };

    return (
        <ContainerTwoPart>
            <LeftSide
                exerciseWithData={exerciseWithData}
                selectedExerciseGroupClickHandler={selectedExerciseGroupClickHandler}
            />
            <RightSide selectedExerciseGroup={selectedExerciseGroup} />
        </ContainerTwoPart>
    );
};
