import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", function () {

    // deploy + return the contract
    async function deployFixture() {
        const Counter = await ethers.getContractFactory("Counter");
        const counter = await Counter.deploy();
        return counter
    }

    describe("Deployment", function () {
        it("Should have a count of 0", async function () {
            const counter = await loadFixture(deployFixture)
            expect(await counter.count()).to.eq(0)
        })
    })
    describe("Increment", function () {
        it("Should increment the count by 1", async function () {
            const counter = await loadFixture(deployFixture)

            const n = 10
            for (let i = 0; i < n; i++) {
                await counter.increment()
                expect(await counter.count()).to.eq(i + 1)
            }

        })
    })
})