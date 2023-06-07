import { SNAP_ORIGIN } from "./consts";

type GetSnapsResponse = Record<string, Snap>;

export type Snap = {
    permissionName: string;
    id: string;
    version: string;
    initialPermissions: Record<string, unknown>;
};

export const getSnaps = async (provider): Promise<GetSnapsResponse> => {
    return (await provider.request({
        method: 'wallet_getSnaps',
    })) as unknown as GetSnapsResponse;
};

export const connectSnap = async (
    provider,
    snapId: string = SNAP_ORIGIN,
    params: Record<'version' | string, unknown> = {},
) => {
    await provider.request({
        method: 'wallet_requestSnaps',
        params: {
            [snapId]: params,
        },
    });
};

export const getSnap = async (provider, version?: string): Promise<Snap | undefined> => {
    try {
        const snaps = await getSnaps(provider);

        return Object.values(snaps).find(
            (snap) =>
                snap.id === SNAP_ORIGIN && (!version || snap.version === version),
        );
    } catch (e) {
        console.log('Failed to obtain installed snap', e);
        return undefined;
    }
};

export const save = async (provider, params) => {
    return await provider.request({
        method: 'wallet_invokeSnap',
        params: {
            snapId: SNAP_ORIGIN,
            request: {
                method: 'save',
                params: {id: params},
            },
        },
    });
}

export const load = async (provider) => {
    const data = await provider.request({
        method: 'wallet_invokeSnap',
        params: {
            snapId: SNAP_ORIGIN,
            request: {
                method: 'get',
            },
        },
    });

    return data?.id ?? null;
}

export const requestPermissions = async (provider): Promise<boolean> => {
    try {
        const old_permissions = await provider.request({
            method: 'wallet_getPermissions'
        });

        const has = old_permissions.find(
            permission => permission.parentCapability === 'snap_manageState'
        );

        if (has !== null) {
            return true;
        }

        const new_permissions = await provider.request({
            method: 'wallet_requestPermissions',
            params: [{ snap_manageState: {} }],
        });

        const has_now = new_permissions.find(
            permission => permission.parentCapability === 'snap_manageState'
        );

        if (has_now) {
            return true;
        }
    } catch(e) {}
    
    return false;
}