interface Navigator {
    getVRDevices: () => any;
    mozGetVRDevices: (any: any) => any;
    isCocoonJS: boolean;
}

declare module BABYLON {
    interface IDisposable {
        dispose(): void;
    }
    /**
     * Des Joysticks
     *
     */
    enum JoystickAxis {
        X = 0,
        Y = 1,
        Z = 2,
    }
    /**
     * Comment
     */
    class Scene {
        /**
         * @param evt commentaire
         */
        public onPointerDown: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        public cameraToUseForPointers: Camera;
        public _getNewPosition(position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, finalPosition: Vector3, excludedMesh?: AbstractMesh): void;
        private _collideWithWorld(position, velocity, collider, maximumRetry, finalPosition, excludedMesh?);
        public createOrUpdateSelectionOctree(maxCapacity?: number, maxDepth?: number): Octree<AbstractMesh>;

    }
}

