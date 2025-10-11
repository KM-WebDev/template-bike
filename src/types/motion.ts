import { MotionValue, TransformOptions } from "motion";

// (value: MotionValue<number>, inputRange: InputRange, outputRange: unknown[], options?: TransformOptions<unknown> | undefined): MotionValue<unknown>
export interface UseTransformParams {
    value: MotionValue<number>;
    inputRange: unknown[];
    outputRange: unknown[];
    options?: TransformOptions<unknown> | undefined;
}
