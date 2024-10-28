import mongoose from "mongoose";

export default async function conectDb() {
    mongoose.connect("mongodb+srv://gabycamilobr:gaby011707@cluster0.jvekh.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}