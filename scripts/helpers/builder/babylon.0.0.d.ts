declare module BABYLON {
    interface IDisposable {
        dispose(): void;
    }
    /**
     * Des Joysticks
     */
    enum JoystickAxis {
        X = 0,
        Y = 1,
        Z = 2
    }
    class Scene {
        /**
         * @param evt commentaire
         */
        public createOrUpdateSelectionOctree(maxCapacity?: number, maxDepth?: number): Octree<AbstractMesh>;
        constructor(id: string, scene: Scene, vertexData?: VertexData, updatable?: boolean, mesh?: Mesh);
        public id: string;
        public delayLoadState: number;
        public delayLoadingFile: string;
    }
}

interface Navigator {
    getVRDevices: () => any;
    mozGetVRDevices: (any: any) => any;
    isCocoonJS: boolean;
}