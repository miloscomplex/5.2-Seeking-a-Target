class Vehicle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(0.5, 2));
        this.acc = createVector();
        this.r = 20;
        this.maxForce = 1;
        // limits steering force
        this.maxSpeed = 16;
    }

    flee(target) {
        
    }

    seek(target) {
        let force = p5.Vector.sub(target, this.pos);
        force.setMag(this.maxSpeed);
        force.sub(this.vel);
        let steering = p5.Vector.sub(force, this.vel);
        steering.limit(this.maxForce);
        this.applyForce(steering);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
        //this.lifetime -= 8;
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255);
        push()
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        triangle(-this.r,-this.r/2,-this.r,this.r/2,this.r, 0);
        pop();
    }
}