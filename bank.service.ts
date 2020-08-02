// FullStack Perú: https://www.facebook.com/groups/607163139705114/

import { of, fromEvent } from "rxjs";
import { concatMap, delay, tap } from "rxjs/operators";

export default class {
  constructor(private readonly target: HTMLButtonElement, private readonly eventName: string) {
    this.setEvent()
  }

  upload1263(body: string) {
    const message = "execute upload1263";
    return of(message);
  }
  upload1264(body: string) {
    console.log(body);
    const message = "execute upload1264";
    return of(message);
  }
  upload1302(body: string) {
    console.log(body);
    const message = "execute upload1302";
    return of(message);
  }
  sendMail1263(body: string) {
    console.log(body);
    const message = "execute sendMail1263";
    return of(message);
  }
  sendMail1264(body: string) {
    console.log(body);
    const message = "execute sendMail1264";
    return of(message);
  }
  sendMail1302(body: string) {
    console.log(body);
    const message = "execute sendMail1302";
    return of(message);
  }

  setEvent() {
    const body = "initial parameter";
    const chained = this.upload1263(body).pipe(
      delay(1000),
      concatMap(value => this.upload1264(value).pipe(delay(3000))),
      concatMap(value => this.upload1302(value).pipe(delay(4000))),
      concatMap(value => this.sendMail1263(value).pipe(delay(2000))),
      concatMap(value => this.sendMail1264(value).pipe(delay(1000))),
      concatMap(value => this.sendMail1302(value).pipe(delay(2500)))
    );

    fromEvent(this.target, this.eventName).subscribe(() => {
      chained.subscribe((response: string) => {
        console.log(response);
        console.log("End");
      });
    });
  }
}
