import { useToast } from "../../../Hooks/use-toast";
import CallbackButton from "./StepCard/Buttons/CallbackButton";
import DownloadButton from "./StepCard/Buttons/DownloadButton";

import StepCard from "./StepCard/StepCard";
import styles from "./HeroSection.module.css";

import {
  Brain,
  Code2,
  Target,
  Briefcase,
  Cpu,
  Users,
  Rocket,
  Database,
  Globe,
  Lightbulb,
  TrendingUp,
  Shield,
  Award,
  
} from "lucide-react";
import React from "react";

export default function HeroSection() {
  const { toast } = useToast();

  return (
    <section className={styles.heroContainer}>
      {/* Subtle Background Icons */}
      <div className={styles.backgroundIcons}>
        <div className={styles.iconPosition1}>
          <Brain className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition2}>
          <Code2 className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition3}>
          <Target className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition4}>
          <Briefcase className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition5}>
          <Cpu className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition6}>
          <Users className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition7}>
          <Rocket className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition8}>
          <Database className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition9}>
          <Globe className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition10}>
          <Lightbulb className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition11}>
          <TrendingUp className={styles.iconStyle} />
        </div>
        <div className={styles.iconPosition12}>
          <Shield className={styles.iconStyle} />
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.gridLayout}>
          {/* Left Content - 60% width */}
          <div className={styles.leftContent}>
            <div className={styles.textContent}>
              {/* 10+ Years Experience Badge */}
              <div className={styles.experienceBadge}>
                <div className={styles.badgeGradient}>
                  <div className={styles.badgeInner}>
                    <div className={styles.badgeIcon}>
                      <Award className={styles.awardIcon} />
                    </div>
                    <span className={styles.badgeText}>
                      10+ Years of Trust & Excellence
                    </span>
                  </div>
                </div>
              </div>

              <h1 className={styles.heading}>
                <span className={styles.headingLine1}>
                  Advance Your Career With
                </span>
                <span className={styles.headingLine2}>
                  <span className={styles.gradientText}>Real Project</span>
                  <span className={styles.whiteText}> and Get Hired</span>
                </span>
              </h1>
              <p className={styles.subheading}>
                Join India's #1{" "}
                <span className={styles.greenGradientText}>
                  Project-Based Upskilling
                </span>{" "}
                Platform for Working Professionals
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={styles.buttonGroup}>
              <CallbackButton toast={toast} dataScienceCounselling={true}  radio={true}/>
              <DownloadButton toast={toast} dataScienceCounselling={true} radio={true}/>
            </div>
          </div>

          {/* Right Content - Racing Track Steps */}
          <div className={styles.rightContent}>
            <div className={styles.stepsContainer}>
              {/* Marathon Track with Progress Line */}
              <div className={styles.progressLine}></div>
              {/* Race Checkpoints */}
              <div className={styles.stepsWrapper}>
                <StepCard
                  number={1}
                  icon="Play"
                  title="Master In-Demand Skills"
                  description="Learn the latest tools in your domain"
                  color="emerald"
                />
                <StepCard
                  number={2}
                  icon="Timer"
                  title="Build & Deploy Projects"
                  description="Apply your skills on real world projects"
                  color="blue"
                />
                <StepCard
                  number={3}
                  icon="Medal"
                  title="Get Hired in Top MNCs"
                  description="Crack high-paying job roles"
                  color="purple"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Color Accent Areas */}
      <div className={styles.blueAccent}></div>
      <div className={styles.orangeAccent}></div>
    </section>
  );
}