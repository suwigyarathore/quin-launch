# React setup based on Next.js with TypeScript 

## Technologies used (Can be)

* NextJS
* Typescript
* React Query (For Server Side/Remote state management)
* Mui5 (For UI component/theme management )


## How to run

```npm i```

```npm run dev```


## Documentation thought process

## Setup Thought Process

I started by seeing assignment the various task required and trying to break that in my head on what all API's libs i need for this.

* So i need LanchMap, LaunchDetails, LaunchFilter components this should suffice. These all components can be dumb components that means there only job is to get props and render

* I choose MUI as component lib as it based on emotion that makes custom style easy and themable 

* First thing I tried to see how the api mentioned in the assignment works. As I am not very aware of swagger but finally after en effort of 15min. I understood how it works. I created a types out of the JSON response by using https://quicktype.io/. Spend like another 5min to understand the data model and what all it provides

* So as I choose nextjs which is almost the de facto standard now as it provides ssr out of box and nice page based architecture. It also has nice CLI support and I have lot of exp in that.

* Now I need some lib to get the data. I could have done with simple JSON but based on requirements like error state and loading state . I made a choice of react-query as it makes developer life very easy and it very robust to do this kind of jobs and can be scaled to any backend in future

* Then I took some time to understand what map lib I could use. As map is on of the most essential part of assignment then I came down to @react-google-maps/api as it is one the standard lib used but to use this you need api key. 
Getting an api key understanding how it works took some quite time. But it was worth as finally I was able to create dumb component whole only job was to get props as location and just show. It was nicely encapsulated 

* As the clock was already ticking . So i thought before making more components like filter and launch detail. Lets make something visible on the screen. So I fetched the launch data and strongly typed it with generated type

* Finally filtered the data out using useMemo to minimize rendering of map component as it is a heavy component

* I almost have no time but I gave a attempt to start on Launch filter component by passing in props component itself looks fine but there is some issue in filter logic which I did not get time to look into. I used datefns lib for date comparison

* I also did not get time to write test

## Improvement if more time

* Understand API more and fetch data based on filter instead of filtering existing data
* Finish left over work on launch detail and launch filter component
* Write test 

