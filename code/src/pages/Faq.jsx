import React from 'react'

const data = [
    {
        question: 'What is a biodata?',
        answer: 'A biodata is a brief document that highlights an individual\'s personal and professional details, typically used for marriage, job applications, or other purposes.'
    },
    {
        question: 'Why do I need a biodata?',
        answer: 'A biodata is essential for presenting yourself in a concise and organized manner, making it easier for others to understand your background, skills, and experiences.'
    },
    {
        question: 'How do I create a biodata on your website?',
        answer: 'Simply click on the "Try it out" button, fill in the required information,then choose your template and our biocraft will generate a professional-looking biodata for you.'
    },
    {
        question: 'Can I customize my biodata?',
        answer: 'Yes, our biodata maker allows you to customize your biodata with various templates to suit your preferences.'
    },
    {
        question: ' Is your biodata maker free?',
        answer: 'Yes it is completely free'
    },
    {
        question: 'I\'m having trouble uploading my photo. What should I do? ',
        answer: 'Please ensure that your photo is in a supported format (JPG/JPEG or PNG) and is not larger than 5MB. If you\'re still experiencing issues, contact our support team for assistance.'
    },
    {
        question: ' Can I access my biodata from multiple devices?',
        answer: 'Yes, you can access your biodata from any device with an internet connection by logging into your account.'
    },
    {
        question: 'How long do you store my biodata? ',
        answer: 'We store your biodata for as long as you maintain an account with us. You can delete your biodata at any time by contacting our support team.'
    },
    // {
    //     question: ' ',
    //     answer: ''
    // },
]

const Faq = () => {
    return (
        <>
            <div className='h-full w-full flex flex-col gap-5 justify-center items-center p-10'>
                <div className='font-bold text-4xl'>

                    Frequently Asked Questions
                </div>
                <div className='flex flex-col gap-2'>
                    {
                        data && data.map((item, index)=>(
                            <div key={index}>
                                <div className='bg-blue-50 p-2 rounded motion-preset-shrink'>
                                    <div>
                                        <span className='font-bold'>Question: </span>
                                        <span>{item.question}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='font-bold'>Answer: </span>
                                        <span className='flex flex-wrap'>{item.answer}</span>
                                    </div>
                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Faq
