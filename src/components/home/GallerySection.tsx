
import React from 'react';
import InfiniteMenu from '@/components/InfiniteMenu';

const galleryItems = [
    {
        image: 'images/pic1.png',
        link: '',
        title: '',
        description: ''
    },
    {
        image: 'images/pic2.png',
        link: '',
        title: '',
        description: ''
    },
    {
        image: 'images/pic3.png',
        link: '',
        title: '',
        description: ''
    },
    {
        image: 'images/pic4.png',
        link: '',
        title: '',
        description: ''
    },
    {
        image: 'images/pic5.png',
        link: '',
        title: '',
        description: ''
    },
    {
        image: 'images/hith.jpeg',
        link: '',
        title: '',
        description: ''
    },
    {
        image: 'images/vol.jpg',
        link: '',
        title: '',
        description: ''
    },
    {
        image: 'images/volonteer.jpg',
        link: '',
        title: '',
        description: ''
    }
];

export default function GallerySection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">
                    معرض الصور
                </h2>
                <div style={{ height: '600px', position: 'relative' }} className="w-full rounded-2xl overflow-hidden shadow-sm border border-neutral-200 white:border-neutral-800">
                    <InfiniteMenu items={galleryItems} />
                </div>
            </div>
        </section>
    );
}
