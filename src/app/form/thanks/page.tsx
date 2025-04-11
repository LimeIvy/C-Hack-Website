"use client"

import { motion } from "framer-motion"
import { Code, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ThanksPage() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-4 pb-4 mt-4 md:mt-8 item-center justify-center flex">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-16 w-16 text-emerald-400" />
          <span className="text-4xl font-bold tracking-tight text-white">C-Tech</span>
        </Link>
      </div>

      <main className="container mx-auto px-4 pt-2 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-6 md:space-y-8 text-center"
        >
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-400 flex items-center justify-center">
              <CheckCircle className="mr-2 h-8 w-8 md:h-10 md:w-10" />
              お問い合わせありがとうございます
            </h1>
            <div className="h-1 w-16 md:w-20 bg-emerald-400 rounded mx-auto"></div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-8 shadow-lg">
            <p className="text-lg md:text-xl mb-6">
              お問い合わせいただき、誠にありがとうございます。
            </p>
            <p className="text-base md:text-lg mb-8">
              内容を確認の上、48時間以内にご返信させていただきます。
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors duration-200"
            >
              トップページに戻る
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 