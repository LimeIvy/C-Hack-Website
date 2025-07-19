/* eslint-disable sonarjs/no-redundant-boolean */

'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { Code, Users, Trophy } from 'lucide-react';

import type { JSX } from 'react';


const achievements = [
  {
    title: 'Matsuriba vol.10 参加',
    description:
      '2025年7月4日に行われた、学生エンジニア同士の交流の機会を生み出すイベント「Matsuriba Vol.10」に、Terminalのメンバー数人で参加しました。',
    icon: <Users className="h-10 w-10 text-emerald-400" />,
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    title: '技育博 vol.2 CyberAgent賞 受賞',
    description:
      '2025年5月11日に行われた「技育博 vol.2」に、Terminalから1チームが参加し、CyberAgent賞を受賞しました。スマホの位置情報とコンパスを用いて、集合場所にGoogle MAP以上に簡単に合流できるアプリ「MATCHAI」を出展しました。',
    icon: <Trophy className="h-10 w-10 text-emerald-400" />,
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    title: 'サークル設立',
    description:
      '2025年5月9日にプログラミングサークル「Terminal」を設立し、活動を開始しました。',
    icon: <Users className="h-10 w-10 text-emerald-400" />,
    image: '/placeholder.svg?height=200&width=400',
  },
]


export default function Achievements(): JSX.Element {
  return (
    <div className="space-y-8 z-50 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-4xl font-bold text-emerald-400 flex items-center">
          <Code className="mr-2 h-8 w-8" />
          活動実績
        </h2>
        <div className="h-1 w-20 bg-emerald-400 rounded"></div>
      </motion.div>

      <div className="space-y-16">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center space-x-3">
                {achievement.icon}
                <h3 className="text-2xl font-bold">{achievement.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
            </div>
            {false && <div className="w-full md:w-1/2">
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={achievement.image || '/placeholder.svg'}
                  alt={achievement.title}
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
