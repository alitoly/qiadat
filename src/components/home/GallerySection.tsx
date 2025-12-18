
import React from 'react';
import InfiniteMenu from '@/components/InfiniteMenu';

const galleryItems = [
    {
        image: 'images/pic1.png',
        link: 'https://google.com/',
        title: 'Item 1',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'images/pic2.png',
        link: 'https://google.com/',
        title: 'Item 2',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'images/pic3.png',
        link: 'https://google.com/',
        title: 'Item 3',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'images/pic4.png',
        link: 'https://google.com/',
        title: 'Item 4',
        description: 'This is pretty cool, right?'
    }
];

export default function GallerySection() {
    return (
        <section className="py-24 bg-neutral-50 white:bg-neutral-900 border-t border-neutral-200 white:border-neutral-800">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900 white:text-neutral-100">
                    Our Gallery
                </h2>
                <div style={{ height: '600px', position: 'relative' }} className="w-full rounded-2xl overflow-hidden shadow-sm border border-neutral-200 white:border-neutral-800">
                    <InfiniteMenu items={galleryItems} />
                </div>
            </div>
        </section>
    );
}
