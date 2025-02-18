export function initialize(): any;
export function discoverService(): any;
export function startServiceRegistration(arg: any): any;
export function startDiscoveringPeers(): any;
export function stopDiscoveringPeers(): any;
export function subscribeOnThisDeviceChanged(callback: any): void;
export function unsubscribeFromThisDeviceChanged(callback: any): void;
export function subscribeOnPeersUpdates(callback: any): void;
export function unsubscribeFromPeersUpdates(callback: any): void;
export function subscribeOnConnectionInfoUpdates(callback: any): void;
export function unsubscribeFromConnectionInfoUpdates(callback: any): void;
export function subscribeOnDnsTxtRecordAvailable(callback: any): void;
export function unsubscribeFromDnsTxtRecordAvailable(callback: any): void;
export function subscribeOnDnsSdServiceAvailable(callback: any): void;
export function unsubscribeFromDnsSdServiceAvailable(callback: any): void;
export function getAvailablePeers(): any;
export function connect(deviceAddress: any): any;
export function connectWithConfig(args: any): any;
export function cancelConnect(): any;
export function createGroup(): any;
export function removeGroup(): any;
export function getConnectionInfo(): any;
export function getGroupInfo(): any;
export function getPeerList(): any;
export function sendFile(pathToFile: any): any;
export function receiveFile(folder: any, fileName: any, forceToScanGallery?: boolean): any;
export function sendMessage(message: any): any;
export function receiveMessage(): any;
export function subscribeOnEvent(event: any, callback: any): void;
export function unsubscribeFromEvent(event: any, callback: any): void;
export const PEERS_UPDATED_ACTION: "PEERS_UPDATED";
export const CONNECTION_INFO_UPDATED_ACTION: "CONNECTION_INFO_UPDATED";
export const THIS_DEVICE_CHANGED_ACTION: "THIS_DEVICE_CHANGED_ACTION";
