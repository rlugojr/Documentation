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
    /**
     * random commentaire
     */
    enum Space {
        LOCAL = 0,
        WORLD = 1,
    }
    enum Xbox360Button {
        A = 0,
        B = 1,
        X = 2,
        Y = 3,
        Start = 4,
        Back = 5,
        LB = 6,
        RB = 7,
        LeftStick = 8,
        RightStick = 9,
    }
}

interface Navigator {
    getVRDevices: () => any;
    mozGetVRDevices: (any: any) => any;
    isCocoonJS: boolean;
}