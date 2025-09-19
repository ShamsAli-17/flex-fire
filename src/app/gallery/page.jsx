// app/gallery/page.jsx
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import AutoPlayBackgroundChanger from "@/components/gallery/AutoPlayBackgroundChanger";

export default function Gallery() {
    // Define your gallery images
    const galleryImages = [
        {
            src: '/gallery/1.jpg',
            alt: 'Modern Gym Equipment',
            title: 'Premium Equipment',
            description: 'State-of-the-art fitness equipment for all your training needs'
        },
        {
            src: '/gallery/2.jpg',
            alt: 'Cardio Zone',
            title: 'Cardio Excellence',
            description: 'High-performance cardio machines with entertainment systems'
        },
        {
            src: '/gallery/3.jpg',
            alt: 'Weight Training Area',
            title: 'Strength Training',
            description: 'Complete range of free weights and resistance equipment'
        },
        {
            src: '/gallery/4.jpg',
            alt: 'Group Fitness Studio',
            title: 'Group Classes',
            description: 'Energizing group fitness classes led by certified trainers'
        },
        {
            src: '/gallery/5.jpg',
            alt: 'Personal Training Space',
            title: 'Personal Training',
            description: 'Dedicated space for one-on-one coaching sessions'
        }
    ];

    return (
        <>
            <Navbar/>
            
            {/* Interactive Background Gallery */}
            <AutoPlayBackgroundChanger 
                images={galleryImages}
                autoPlayInterval={5000}
                className="min-h-screen"
            />
            
            <Footer/>
        </>
    );
}
