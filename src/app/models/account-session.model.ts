export interface AccountSession {
	uid : string;
	username : string;
	module_states : {
		finance : number;
	}
}