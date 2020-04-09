import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import {Category} from './models/category'
import {Discussion} from './models/discussion'
import {Topic} from './models/topic'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const CATEGORIES: Category[] = [
      {
        id: 1,
        name: 'Programming Languages'
      },
      {
        id: 2,
        name: 'Problems'
      },
      {
        id: 3,
        name: 'Other'
      },
    ];


    const DISCUSSIONS: Discussion[] = [
      {
        category_id: 1,
        id: 1,
        name: 'Python',
        description: 'Some common questions on Python',
        topics_count: 17,
        posts_count: 20,
    },
    {
        category_id: 1,
        id: 2,
        name: 'C++',
        description: 'Some common questions on C++',
        topics_count: 12,
        posts_count: 32,
    },
    {
        category_id: 1,
        id: 3,
        name: 'Java',
        description: 'Object-oriented coding',
        topics_count: 12,
        posts_count: 32,
    },
    {
        category_id: 2,
        id: 4,
        name: 'Compile errors',
        description: 'Compilation problems',
        topics_count: 15,
        posts_count: 87,
    },
    {
        category_id: 2,
        id: 5,
        name: 'How to work with git',
        description: 'Git committing/pushing problems',
        topics_count: 5,
        posts_count: 7,
    },
    {
        category_id: 2,
        id: 6,
        name: 'Syntax error',
        description: 'Syntax problems',
        topics_count: 11,
        posts_count: 54,
    },
    {
        category_id: 3,
        id: 7,
        name: 'Project',
        description: 'How to manage project based team work',
        topics_count: 17,
        posts_count: 20,
    },
    {
      category_id: 3,
      id: 8,
      name: 'Django',
      description: 'What is Django? Is it movie?',
      topics_count: 11,
      posts_count: 54,
    },
    {
      category_id: 3,
      id: 9,
      name: 'Other',
      description: 'Other staff',
      topics_count: 11,
      posts_count: 54,
    },
    ];
    const TOPICS: Topic[] = [
      {
        discussion_id: 1,
        id: 1,
        unread: 7,
        title: 'How to create array in python',
        description: 'An array is a systematic arrangement of similar objects, usually in rows and columns.',
        author: 'Johnathan Berry',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Katy Browse',
        last_date: new Date('April 17, 2019 12:32:00'),
        comments: [
          {
            id: 1,
            content: 'i can help you bro',
            author: 'Eto zhe ya Nurik',
            date: new Date()
          }],
      },
      {
        discussion_id: 1,
        id: 2,
        unread: 4,
        title: 'I need to create quick search algorithm',
        description: 'Binary search is a fast search algorithm with run-time complexity of Ο(log n). ',
        author: 'Anton Miami',
        date: new Date('January 14, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Artur Yashkin',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 1,
        id: 3,
        unread: 7,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 1,
        id: 4,
        unread: 4,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('January 14, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 1,
        id: 5,
        unread: 4,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('January 14, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 2,
        id: 1,
        unread: 6,
        title: 'How to make two dimensional array',
        description: 'A 2D array has a type such as int[][] or String[][], with two pairs of square brackets.',
        author: 'Emma',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Anonymous',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 2,
        id: 7,
        unread: 0,
        title: 'How to create object in c++',
        description: 'A class is a user-defined data type that we can use in our program.',
        author: 'Eskendir11',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Aruzhan Baybazarova',
        last_date: new Date('April 17, 2019 12:32:00')
      },
      {
        discussion_id: 2,
        id: 8,
        unread: 1,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 2,
        id: 9,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00')
      },
      {
        discussion_id: 2,
        id: 10,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00')
      },
      {
        discussion_id: 3,
        id: 11,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 3,
        id: 12,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 3,
        id: 13,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 3,
        id: 14,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 3,
        id: 15,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 4,
        id: 16,
        unread: 0,
        title: 'A is a letter',
        description: 'A is first letter',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 4,
        id: 17,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 5,
        id: 18,
        unread: 0,
        title: 'B is a letter',
        description: 'Banana is a simple word',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 5,
        id: 19,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 6,
        id: 20,
        unread: 0,
        title: 'C is also letter',
        description: 'Cat is an animal',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 6,
        id: 21,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 7,
        id: 22,
        unread: 0,
        title: 'D is also letter',
        description: 'Dog hates cat',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 7,
        id: 23,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 8,
        id: 24,
        unread: 0,
        title: 'E is letter',
        description: 'Earings',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 8,
        id: 25,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 8,
        id: 26,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 8,
        id: 27,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 9,
        id: 28,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      }
    ];
    return {CATEGORIES, DISCUSSIONS, TOPICS}
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId<T extends Category | Discussion | Topic>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
  // topics
  createTopicsDB() {
    const TOPICS = [
      {
        discussion_id: 1,
        id: 1,
        unread: 7,
        title: 'How to create array in python',
        description: 'An array is a systematic arrangement of similar objects, usually in rows and columns.',
        author: 'Johnathan Berry',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Katy Browse',
        last_date: new Date('April 17, 2019 12:32:00'),
        comments: [
          {
            id: 1,
            content: 'i can help you bro',
            author: 'Eto zhe ya Nurik',
            date: new Date()
          }],
      },
      {
        discussion_id: 1,
        id: 2,
        unread: 4,
        title: 'I need to create quick search algorithm',
        description: 'Binary search is a fast search algorithm with run-time complexity of Ο(log n). ',
        author: 'Anton Miami',
        date: new Date('January 14, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Artur Yashkin',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 1,
        id: 3,
        unread: 7,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 1,
        id: 4,
        unread: 4,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('January 14, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 1,
        id: 5,
        unread: 4,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('January 14, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 2,
        id: 1,
        unread: 6,
        title: 'How to make two dimensional array',
        description: 'A 2D array has a type such as int[][] or String[][], with two pairs of square brackets.',
        author: 'Emma',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Anonymous',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 2,
        id: 7,
        unread: 0,
        title: 'How to create object in c++',
        description: 'A class is a user-defined data type that we can use in our program.',
        author: 'Eskendir11',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Aruzhan Baybazarova',
        last_date: new Date('April 17, 2019 12:32:00')
      },
      {
        discussion_id: 2,
        id: 8,
        unread: 1,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 2,
        id: 9,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00')
      },
      {
        discussion_id: 2,
        id: 10,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00')
      },
      {
        discussion_id: 3,
        id: 11,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 3,
        id: 12,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 3,
        id: 13,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 3,
        id: 14,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 3,
        id: 15,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 4,
        id: 16,
        unread: 0,
        title: 'A is a letter',
        description: 'A is first letter',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 4,
        id: 17,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 5,
        id: 18,
        unread: 0,
        title: 'B is a letter',
        description: 'Banana is a simple word',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 5,
        id: 18,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 6,
        id: 18,
        unread: 0,
        title: 'C is also letter',
        description: 'Cat is an animal',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 6,
        id: 18,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 7,
        id: 18,
        unread: 0,
        title: 'D is also letter',
        description: 'Dog hates cat',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 7,
        id: 18,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 8,
        id: 18,
        unread: 0,
        title: 'E is letter',
        description: 'Earings',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 8,
        id: 18,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 9,
        id: 18,
        unread: 0,
        title: 'F is letter.',
        description: 'Flying cars',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
      {
        discussion_id: 9,
        id: 18,
        unread: 0,
        title: 'Forum post title with a complex and long question',
        description: 'Lorem ipsum is a simple text',
        author: 'Author name',
        date: new Date('February 4, 2016 10:13:00'),
        replies: 5,
        views: 179,
        last_author: 'Last Author name',
        last_date: new Date('April 17, 2019 12:32:00'),
      },
  ];
    return {TOPICS};
  }
  genTopicId(topics: Topic[]): number {
    return topics.length > 0 ? Math.max(...topics.map(hero => hero.id)) + 1 : 11;
  }
}
