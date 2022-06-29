const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);



// const userData = {
//     username: 'reka',
//     email: 'reka@example.com',
//     thoughts: [
//         {
//             thoughtText: 'This is my first thought',
//             username: 'reka',
//             reactions: [
//                 {
//                     reactionBody: 'This is my first reaction',
//                     username: 'kristi'
//                 },
//                 {
//                     reactionBody: 'This is my first reaction too',
//                     username: 'lance'
//                 },
//             ]
//         },
//         {
//             thoughtText: 'This is my second thought',
//             username: 'reka',
//             reactions: [
//                 {
//                     reactionBody: 'This is my second reaction',
//                     username: 'lance'
//                 },
//                 {
//                     reactionBody: 'This is my second reaction too',
//                     username: 'kristi'
//                 },
//             ]
//         }
//     ]
// };

// const userData1 =  {
//     username: 'kristi',
//     email: 'kristi@example.com',
//     thoughts: [
//         {
//             thoughtText: 'This is cool',
//             username: 'kristi',
//             reactions: [
//                 {
//                     reactionBody: 'Yes it is',
//                     username: 'reka'
//                 },
//                 {
//                     reactionBody: 'I want one!',
//                     username: 'lance'
//                 },
//             ]
//         },
//         {
//             thoughtText: 'Why is it so hard to make friends as an adult?',
//             username: 'kristi',
//             reactions: [
//                 {
//                     reactionBody: 'Amen',
//                     username: 'lance'
//                 },
//                 {
//                     reactionBody: 'Who needs friends?',
//                     username: 'nikki'
//                 },
//             ]
//         }
//     ]
// };

// const userData2 = {
//     username: 'lance',
//     email: 'lance@example.com',
//     thoughts: [
//         {
//             thoughtText: 'I ate good today',
//             username: 'lance',
//             reactions: [
//                 {
//                     reactionBody: 'Looks good, let me have some!',
//                     username: 'reka'
//                 },
//             ]
//         },
//         {
//             thoughtText: 'Do I have to go to work today?',
//             username: 'lance',
//             reactions: [
//                 {
//                     reactionBody: 'Nope, call out...',
//                     username: 'nikki'
//                 },
//                 {
//                     reactionBody: 'Eff yo job!',
//                     username: 'reka'
//                 },
//             ]
//         }
//     ]
// };


module.exports = User;