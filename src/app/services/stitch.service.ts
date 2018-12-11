import { Injectable } from '@angular/core';
import { Stitch, RemoteMongoClient, UserPasswordCredential, StitchAppClient } from 'mongodb-stitch-browser-sdk';

@Injectable({
    providedIn: 'root',
})
export class MongoStitch {
    public db: any;
    public client: StitchAppClient;
    public user;

    constructor() {
        this.client = Stitch.initializeDefaultAppClient('supermerkat-kwqtm');
        this.db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('supermerkat');
        this.user = this.client.auth.user;
    }

    login (username, password) {
        return this.client.auth.loginWithCredential(new UserPasswordCredential(username, password)).then((user) => {
            this.user = user;
            return user;
        });
    }

    getDB() {
        return this.db;
    }
}
