//
//

#include "rtbkit/plugins/augmentor/redis_augmentor.h"
#include "soa/service/service_utils.h"

#include <boost/program_options/cmdline.hpp>
#include <boost/program_options/options_description.hpp>
#include <boost/program_options/positional_options.hpp>
#include <boost/program_options/parsers.hpp>
#include <boost/program_options/variables_map.hpp>

#include <iostream>
#include <thread>
#include <chrono>


using namespace std;

/******************************************************************************/
/* MAIN                                                                       */
/******************************************************************************/

int main(int argc, char** argv)
{
    using namespace boost::program_options;

    Datacratic::ServiceProxyArguments args;

    options_description options = args.makeProgramOptions();
    options.add_options() ("help,h", "Print this message");

    variables_map vm;
    store(command_line_parser(argc, argv).options(options).run(), vm);
    notify(vm);

    if (vm.count("help")) {
        cerr << options << endl;
        return 1;
    }

    auto proxies = args.makeServiceProxies();
//    RTBKIT::FrequencyCapAugmentor augmentor(serviceProxies, "frequency-cap-ex");
//    augmentor.init();
//    augmentor.start();
    const std::string redis_uri = "127.0.0.1:6379";

    Redis::Address redis(redis_uri /* TODO */);
    RTBKIT::RedisAugmentor redis_augmentor("redis-augmentation", "redis-augmentation",
    		proxies,
    		redis);

    redis_augmentor.init  (2 /* TODO */);
    redis_augmentor.start ();


    while (true)
    	this_thread::sleep_for(chrono::seconds(10));

    // Won't ever reach this point but this is how you shutdown an augmentor.
    redis_augmentor.shutdown();

    return 0;
}
