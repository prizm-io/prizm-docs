import CheckIcon from "./CheckIcon";
import XIcon from "./XIcon";

export default function Content() {
  return (
    <div className="w-full py-[70px] flex justify-center">
      <div className="w-full max-w-[1224px] justify-center items-center flex flex-col gap-4">
        <div className="self-stretch text-[#f6f6f7] text-5xl font-bold font-['Inter'] leading-[56px]">
          HARDWARE
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            Out of the box Hardware
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            Integrating innovative IoT solutions can be challenging for
            businesses. From selecting the right compute power and cellular
            technology to ensuring data security, the complexities can be
            daunting. Prototyping and modular designs often require significant
            time and investment, pushing small businesses to seek expensive
            design houses. PRIZM simplifies this process with its out-of-the-box
            hardware solution, featuring a compact base board and versatile
            connectivity and function cards. Our platform offers end-to-end
            security through certified hardware and a powerful compute unit
            tailored for your applications. With PRIZM, focus on innovation
            without the burdens of IoT development. Seamlessly integrate into
            the IoT landscape and bring your products to market faster. Trust
            PRIZM to enhance your IoT journey and empower your business.
          </div>
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            Connectivity Card
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            PRIZM's connectivity card addresses your IoT integration challenges
            with an efficient M.2 design. This form factor is superior due to
            its compact size, flexibility in interface options, and direct
            motherboard connection, which together enhance performance while
            optimizing space and power consumption. Featuring a dual-core
            compute platform, including an ARM Cortex-M core for real-time
            processing and a high-performance core with a CoreMark score above
            1500, it meets demanding applications. Our cellular modules provide
            world-wide roaming and customization, ensuring seamless integration
            and high-speed cloud communication. Built on a zero-trust security
            policy, it safeguards data through encryption, minimizing the risk
            of attacks. With PRIZM, you gain a future-proof solution that allows
            you to focus on innovation while we handle the complexities of IoT
            development.
          </div>
        </div>
        <div className="max-w-[calc(98vw-32px)] overflow-scroll">
          <div className="min-w-[1224px] self-stretch h-96 flex-col justify-start items-start flex">
            <div className="self-stretch h-16 justify-center items-center gap-4 inline-flex">
              <div className="w-[340px] h-11 p-3 opacity-0 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-justify text-[#080808] text-[10px] font-medium font-['TT Norms Pro'] leading-tight">
                  Lorem Ipsum
                </div>
              </div>
              <div className="flex-1 h-12 p-1.5 justify-center items-center gap-2.5 flex">
                <div className="text-justify text-[#f6f6f7] text-lg font-semibold font-['Inter'] leading-9">
                  CELLULAR & WI-FI CARD
                </div>
              </div>
              <div className="flex-1 h-12 p-1.5 justify-center items-center gap-2.5 flex">
                <div className="text-justify text-[#f6f6f7] text-lg font-semibold font-['Inter'] leading-9">
                  WI-FI CARD
                </div>
              </div>
            </div>
            <div className="self-stretch h-16 border-t border-[#464f7a] justify-center items-center gap-4 inline-flex">
              <div className="w-[340px] h-[60px] p-3 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#f6f6f7] text-lg font-medium font-['TT Norms Pro'] leading-9">
                  Compatible with prototyping platform
                </div>
              </div>
              <div className="flex-1 h-6 justify-center items-center gap-2.5 flex">
                <CheckIcon />
              </div>
              <div className="flex-1 h-6 justify-center items-center gap-2.5 flex">
                <CheckIcon />
              </div>
            </div>
            <div className="self-stretch h-16 border-t border-[#464f7a] justify-center items-center gap-4 inline-flex">
              <div className="w-[340px] h-[60px] p-3 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#f6f6f7] text-lg font-medium font-['TT Norms Pro'] leading-9">
                  Wi-Fi connectivity
                </div>
              </div>
              <div className="flex-1 h-6 justify-center items-center gap-2.5 flex">
                <CheckIcon />
              </div>
              <div className="flex-1 h-6 justify-center items-center gap-2.5 flex">
                <CheckIcon />
              </div>
            </div>
            <div className="self-stretch h-16 border-t border-[#464f7a] justify-center items-center gap-4 inline-flex">
              <div className="w-[340px] h-[60px] p-3 justify-start gap-2.5 flex">
                <div className="text-[#f6f6f7] text-lg font-medium font-['TT Norms Pro'] leading-9">
                  Bluetooth connectivity
                </div>
              </div>
              <div className="flex-1 h-6 justify-center items-center gap-2.5 flex">
                <CheckIcon />
              </div>
              <div className="flex-1 h-6 justify-center items-center gap-2.5 flex">
                <CheckIcon />
              </div>
            </div>
            <div className="self-stretch h-16 border-t border-[#464f7a] justify-center items-center gap-4 inline-flex">
              <div className="w-[340px] h-[60px] p-3 justify-start gap-2.5 flex">
                <div className=" text-[#f6f6f7] text-lg font-medium font-['TT Norms Pro'] leading-9">
                  Cellular connectivity
                </div>
              </div>
              <div className="flex-1 h-6 justify-center items-center gap-2.5 flex">
                <CheckIcon />
              </div>
              <div className="flex-1 h-6 justify-center items-center gap-2.5 flex">
                <XIcon />
              </div>
            </div>
            <div className="self-stretch h-16 border-t border-[#464f7a] justify-center items-center gap-4 inline-flex">
              <div className="w-[340px] h-[60px] p-3 justify-start gap-2.5 flex">
                <div className="text-[#f6f6f7] text-lg font-medium font-['TT Norms Pro'] leading-9">
                  GPS/GNSS connectivity
                </div>
              </div>
              <div className="flex-1 h-6 justify-center items-center gap-2.5 flex">
                <CheckIcon />
              </div>
              <div className="flex-1 h-6 justify-center items-center gap-2.5 flex">
                <XIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            PRIZM Prototyping Platform
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            PRIZM's prototyping platform is the ideal starter kit for IoT
            development. This user-friendly solution includes a base board and
            function card for seamless integration. Simply mount the
            connectivity card, connect antenna cables, and attach QWIIC sensors.
            Power it with the included USB Type-C cable or battery, and your
            device connects to the PRIZM cloud instantly. No complex setups or
            extensive electronics knowledge are needed—this kit simplifies
            prototyping. With PRIZM, transition from idea to deployment quickly,
            ensuring a smooth innovation journey.{" "}
          </div>
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            Baseboard
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            The PRIZM base board is a compact, credit card-sized solution for
            your IoT projects. It features two M.2 slots for the connectivity
            and function cards, providing exceptional flexibility. Onboard
            cellular and GNSS antennas ensure reliable cloud communication and
            accurate location services. The integrated Li-Ion battery connector
            and charger, along with an I2C fuel gauge, create a dependable
            battery-operated plat-form for portability. The UART-to-USB bridge
            allows for easy computer connection, enabling access to a virtual
            COM port for terminal interactions. With two QWIIC connectors on a
            shared I2C bus, you can easily integrate a variety of sensors. The
            programmable I2C LED serves as a status indicator, providing
            real-time feedback during cloud connection, while the reset and
            multipurpose buttons enhance user interaction. This
            batteries-included solution is designed to meet your IoT needs
            without extra components. Aesthetically pleasing and
            space-efficient, the PRIZM base board is your ideal foundation for
            innovation.
          </div>
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            Function Card
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            For advanced users seeking flexibility, the PRIZM function card is a
            powerful solution for your IoT needs. This M.2 card makes all I/Os
            accessible for customer applications. Understanding the diverse
            requirements of industries like industrial automation, healthcare,
            aerospace, agriculture, and AI, the PRIZM function card allows for
            the design of custom breakout cards for specialized functionalities,
            such as Edge processing or AI coprocessors. This customization lets
            you implement tailored solutions that deliver high-quality,
            domain-specific data to the cloud via standard connectivity. With
            the PRIZM function card, you gain the professional capabilities
            needed to drive innovation and meet your project goals with
            confidence. A breakout function card is packaged for prototyping and
            connects to customer interfaces through soldered headers and jumper
            wires.
          </div>
        </div>
        <div className="self-stretch text-[#f6f6f7] text-5xl font-bold font-['Inter'] leading-[56px]">
          FIRMWARE
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            Nextworks
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            Like any embedded system, PRIZM cards requires a firmware, the
            essential software layer, that enables efficient operation of the
            hardware while providing a robust launching pad for customer
            business logic. Nextworks serves as this critical software,
            leveraging a powerful heterogeneous SoC architecture to manage
            device resources efficiently. Our real-time operating system (RTOS)
            ensures timely execution of tasks, allowing business logic to
            operate seamlessly on a high-performance core. This approach
            simplifies the development and deployment of applications in the
            cloud, enabling you to focus on your specific needs. With Nextworks,
            you can enhance your IoT capabilities while maintaining system
            stability and security. Embrace the future of IoT with Nextworks,
            where innovation and simplicity converge.
          </div>
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            Middleware
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            Nextworks middleware, running on our performance core, is designed
            to optimize the execution of sandboxed applications, making it
            incredibly easy for customers to deploy and manage their business
            logic. With a full stack of appropriate software libraries—such as
            cellular/Wi-Fi connectivity, security, and memory/IO
            virtualization—Nextworks ensures that business applications do not
            have to worry about the complexities of the underlying system.{" "}
            <br />
            <br />
            By utilizing the high-performance capabilities of the core,
            Nextworks guarantees that applications run efficiently while
            maintaining isolation from the underlying system, enhancing security
            and stability. This architecture allows for seamless integration
            with the PRIZM cloud, enabling the quick transfer of executable
            applications to your devices. With Nextworks, you can focus on
            developing innovative solutions without the complexities of firmware
            management, empowering you to bring your IoT ideas to life
            effortlessly.
          </div>
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            NEXTVISOR
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            At the core of our PRIZM solution lies NEXTVISOR the autonomic
            manager and orchestrator that ensures seamless connectivity and
            robust application performance across your fleet of devices. As the
            mission controller within NEXTWORKS middleware, NEXTVISOR
            autonomously maintains cellular connectivity and manages resources.
            It can shut down applications or limit access when faced with
            network or memory constraints. By validating and launching the
            correct version of applications from the cloud, NEXTVISOR ensures
            your devices operate with the latest features and security updates.{" "}
            <br />
            <br />
            NEXTVISOR launches applications in their own sandboxes, allowing
            them to run safely without interfering with the core firmware or
            other apps. This isolation enhances system stability, ensuring that
            any app failure does not compromise the entire device. By separating
            device firmware from user applications, firmware updates become less
            frequent, minimizing the risk of OTA-related crashes. <br />
            <br />
            With NEXTWORKS, business logic development cycles become agile and
            efficient. You can easily compile data flows into business logic
            apps, which are sent to your devices without needing a firmware
            update. Utilizing various frameworks and libraries, such as Arduino
            and TinyGo, simplifies the development process, allowing advanced
            users to choose the best tools for their needs. Embrace the power of
            NEXTWORKS and transform your IoT challenges into opportunities for
            growth and success.
          </div>
        </div>
        <div className="self-stretch text-[#f6f6f7] text-5xl font-bold font-['Inter'] leading-[56px]">
          CLOUD
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            Dashboard
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            Our cutting-edge Dashboard offers real-time data visualization with
            a stunning, customizable interface. It enables easy monitoring and
            in-depth analysis across all devices, from tracking GPS locations to
            customizing views with the intuitive Dashboard Editor. This solution
            empowers users to make smarter, faster decision-making for
            operations of any scale from a small startup up to any kind of
            enterprise scale.
          </div>
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            Device and Employee Management
          </div>
          <div>
            <span className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
              Devices Management is an essential solution for maintaining
              seamless control over company devices. It enables the effortless
              addition or removal of devices, assigning clear names for easy
              identification, and allocating bundles of apps tailored to each
              device's needs. With features like real-time monitoring of mobile
              data usage and automatic top-up capabilities, it ensures
              uninterrupted connectivity and optimal performance. The system
              simplifies device oversight, enhancing operational efficiency;
              ensuring that all company devices are always ready to support
              business objectives.
              <br />
              <br />
              Employee Management
            </span>
            <span className="text-[#cbd3e5] text-lg font-bold font-['Inter'] leading-9">
              {" "}
            </span>
            <span className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
              is a powerful tool designed to streamline project collaboration by
              enabling the addition of team members to specific projects and
              managing their roles with precision. This functionality ensures
              greater control over access, allowing for a more secure and
              organized workflow. By tailoring permissions to each team member’s
              role, it enhances efficiency and safeguards sensitive information,
              making it easier to achieve project goals with confidence and
              clarity.
            </span>
          </div>
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            App Builder
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            The App Builder is the cornerstone of effortless app creation and
            management, designed to empower teams by eliminating the need for
            coding expertise. With its intuitive Drag & Drop interface, apps can
            be built swiftly and efficiently, streamlining the development
            process. For those seeking more advanced functionality, the
            extendable Code node offers the flexibility to incorporate custom
            code, which can be saved and reused across multiple projects. This
            powerful combination ensures that app development is accessible,
            efficient, and perfectly tailored to meet evolving business needs.
          </div>
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            Alerts
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            Alerts provide a dynamic and responsive system for managing critical
            actions when apps built in the App Builder send specific signals.
            With a comprehensive list of options, including SMS, Slack, and
            Email, these alerts ensure that the right information reaches the
            right channels instantly. This system enhances operational
            efficiency by automating responses and ensuring timely
            communication, allowing businesses to stay ahead of any situation
            with confidence and ease.
          </div>
        </div>
        <div className="py-8 flex-col justify-start items-start gap-4 flex">
          <div className="text-[#f6f6f7] text-[32px] font-bold font-['Inter'] leading-10">
            Other Advanced Features
          </div>
          <div className="text-[#cbd3e5] text-lg font-normal font-['Inter'] leading-9">
            The platform's other advanced features provide seamless access to
            the latest data from devices, which can be effortlessly exported in
            CSV format. This capability is invaluable for custom data
            engineering, in-depth analytics, and training machine learning
            models, offering endless possibilities for data-driven innovation.
            Additionally, with a company-specific API key, all data can be
            securely received or sent directly to the API, enabling full
            integration with existing systems and ensuring that data is utilized
            to its fullest potential. This combination of flexibility and
            control makes it a powerful tool for driving business intelligence
            and efficiency.
          </div>
        </div>
      </div>
    </div>
  );
}
