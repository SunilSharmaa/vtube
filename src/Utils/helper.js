const nameList = [
    'Aarav Sharma', 'Vivaan Patel', 'Aditya Verma', 'Raj Yadav', 'Rahul Mehta', 'Amit Joshi',
    'Karan Reddy', 'Rohan Nair', 'Siddharth Tiwari', 'Manav Thakur', 'Sunil Iyer', 'Vimal Das',
    'Sonu Choudhary', 'Ankit Mukherjee', 'Ravi Bansal', 'Nikhil Rastogi', 'Deepak Malhotra', 'Suresh Gupta',
    'Varun Saxena', 'Arjun Dubey', 'Meena Sharma', 'Pooja Verma', 'Sneha Patel', 'Kiran Yadav',
    'Rani Mehta', 'Neha Joshi', 'Sita Reddy', 'Laxmi Nair', 'Rekha Tiwari', 'Radha Thakur',
    'Bhavna Iyer', 'Divya Das', 'Kajal Choudhary', 'Payal Mukherjee', 'Swati Bansal', 'Isha Rastogi',
    'Priya Malhotra', 'Tina Gupta', 'Naina Saxena', 'Ritika Dubey', 'Anjali Sharma', 'Harsh Verma',
    'Ritesh Patel', 'Sagar Yadav', 'Nitin Mehta', 'Umesh Joshi', 'Chetan Reddy', 'Dinesh Nair',
    'Akhil Tiwari', 'Kunal Thakur', 'Ramesh Iyer', 'Mahesh Das', 'Naresh Choudhary', 'Alok Mukherjee',
    'Shivam Bansal', 'Prem Rastogi', 'Om Malhotra', 'Lakshya Gupta', 'Darshan Saxena', 'Yash Dubey',
    'Rohit Sharma', 'Punit Verma', 'Hemant Patel', 'Viraj Yadav', 'Sahil Mehta', 'Tarun Joshi',
    'Armaan Reddy', 'Dev Nair', 'Jay Tiwari', 'Ajay Thakur', 'Aashish Iyer', 'Gaurav Das',
    'Sameer Choudhary', 'Vivek Mukherjee', 'Tushar Bansal', 'Shyam Rastogi', 'Mukul Malhotra', 'Kishor Gupta',
    'Harshit Saxena', 'Prakash Dubey', 'Alka Sharma', 'Sarita Verma', 'Neelam Patel', 'Geeta Yadav',
    'Jyoti Mehta', 'Sonal Joshi', 'Anita Reddy', 'Usha Nair', 'Kusum Tiwari', 'Kamla Thakur',
    'Shalini Iyer', 'Madhu Das', 'Pinki Choudhary', 'Seema Mukherjee', 'Nidhi Bansal', 'Pallavi Rastogi',
    'Bharti Malhotra', 'Chhavi Gupta', 'Komal Saxena', 'Mona Dubey', 'Farhan Sharma', 'Irfan Verma',
    'Salman Patel', 'Aftab Yadav', 'Zakir Mehta', 'Wasim Joshi', 'Imran Reddy', 'Asif Nair',
    'Faizan Tiwari', 'Zeeshan Thakur', 'Sana Iyer', 'Ayesha Das', 'Heena Choudhary', 'Rukhsar Mukherjee',
    'Nagma Bansal', 'Rubina Rastogi', 'Meher Malhotra', 'Nazma Gupta', 'Tabassum Saxena', 'Alvira Dubey',
    'John Sharma', 'David Verma', 'Peter Patel', 'Chris Yadav', 'Aman Mehta', 'Abhay Joshi',
    'Bhavesh Reddy', 'Siddhi Nair', 'Aarohi Tiwari', 'Anaya Thakur', 'Tanvi Iyer', 'Radhika Das',
    'Rupal Choudhary', 'Shaurya Mukherjee', 'Naman Bansal', 'Tejas Rastogi', 'Ishaan Malhotra', 'Kabir Gupta',
    'Parth Saxena', 'Advik Dubey', 'Aryan Sharma', 'Atharv Verma', 'Hriday Patel', 'Yuvraj Yadav',
    'Nirav Mehta', 'Reyansh Joshi', 'Veer Reddy', 'Kiaan Nair', 'Pranav Tiwari', 'Harshil Thakur',
    'Bhavin Iyer', 'Manan Das', 'Krish Choudhary', 'Neil Mukherjee', 'Divit Bansal', 'Vihaan Rastogi',
    'Zayan Malhotra', 'Eshan Gupta'
  ];

  const commentList = [
    'Hey there! Just wanted to say you’re doing an amazing job.',
    'Hope you’re having a productive and positive day!',
    'This looks really great — keep up the awesome work!',
    'Wishing you all the success in whatever you’re working on.',
    'I really appreciate the effort you’ve put into this. Well done!',
    'You’ve got this! Stay focused and keep going strong.',
    'Thanks for sharing this — really made my day!',
    'That was genuinely helpful. Thanks a lot!',
    'You’ve got a good thing going here — keep pushing!',
    'Wow, didn’t expect that. Nicely done!',
    'Sending good vibes your way. Hope everything works out well!',
    'Keep shining and spreading positivity everywhere!',
    'It’s great to see such enthusiasm and passion!',
    'This message is just a reminder: you’re awesome.',
    'Loved the way you explained that — very clear and to the point.',
    'Sometimes small progress is still progress — keep at it!',
    'You’ve got a unique perspective, and it’s refreshing.',
    'If no one told you today — you’re doing just fine.',
    'Good energy attracts good outcomes — stay positive!',
    'Here’s a digital high-five for all your efforts!'
  ];
  
    
  export const generateName = () => nameList[Math.floor(Math.random() * nameList.length)];
  export const generateComment = () => commentList[Math.floor(Math.random() * commentList.length)];

